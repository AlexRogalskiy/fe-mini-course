# XMLHTTPRequest

在前端发展初期，页面中的数据只能整体刷新，当想改变网页某些局部内容时，必须重新刷新，这体验太糟糕了！

在 2005 年的时候，Jesse James Garrett 发布了一篇标题为“Ajax：A New Approach to Web Application” 的文章，这项技术改变了网页只能够全部刷新的局面。


在 `SYHybridWebView` 中我注册了 2 个 messaghandler：

```objective-c
// deal with environment message
[self.configuration.userContentController addScriptMessageHandler:self name:kSYScriptEnvMsgName];
// deal with common message
[self.configuration.userContentController addScriptMessageHandler:self.msgHandler name:kSYScriptMsgName];
```
由于 userContentController 会持有 self， configuration 持有 userContentController，configuration 又被 self 持有，导致 self 持有 self，出现了循环引用。

想解决这个问题，需要调用 `removeScriptMessageHandlerForName`，在哪里调用这个方法合适呢？

想到 `SYHybridWebView` 只是一个 view，可以通过 UIView 的生命周期来解决：

```objective-c
// 视图被添加
- (void)didAddSubview:(UIView *)subview {
    NSLog(@"%@", NSStringFromSelector(_cmd));
}

// 当视图即将加入父视图时 / 当视图即将从父视图移除时调用
- (void)willMoveToSuperview:(nullable UIView *)newSuperview {
    NSLog(@"%@", NSStringFromSelector(_cmd));
}

// 当视图加入父视图时 / 当视图从父视图移除时调用
- (void)didMoveToSuperview {
    NSLog(@"%@", NSStringFromSelector(_cmd));
}

// 当视图即将加入window视图时 / 当视图即将从window视图移除时调用
- (void)willMoveToWindow:(nullable UIWindow *)newWindow {
    NSLog(@"%@", NSStringFromSelector(_cmd));
}

// - 当视图加入window视图时 / 当视图从window视图移除时调用
- (void)didMoveToWindow {
   NSLog(@"%@", NSStringFromSelector(_cmd));
}

// 当子视图从本视图移除时调用
- (void)willRemoveSubview:(UIView *)subview {
    NSLog(@"%@", NSStringFromSelector(_cmd));
}
```

但是由于 `SYHybridWebView` 并没有被释放，`willRemoveSubview:` 这个方法并不会调用，我们看一下 View 声明周期的调用顺序：

`SYHybridWebView` 被添加到视图上时的调用顺序：

```shell
2020-10-25 09:58:01.167321+0800 公众号素燕[35982:33187169] didAddSubview:
2020-10-25 09:58:01.207589+0800 公众号素燕[35982:33187169] willMoveToSuperview:
2020-10-25 09:58:01.207742+0800 公众号素燕[35982:33187169] didMoveToSuperview
2020-10-25 09:58:01.213926+0800 公众号素燕[35982:33187169] willMoveToWindow:
2020-10-25 09:58:01.216857+0800 公众号素燕[35982:33187169] didMoveToWindow
```

`SYHybridWebView` 从视图中移除时的调用顺序：

```shell
2020-10-25 10:02:42.963931+0800 公众号素燕[36066:33201308] willMoveToWindow:
2020-10-25 10:02:42.964358+0800 公众号素燕[36066:33201308] didMoveToWindow
2020-10-25 10:02:42.964887+0800 公众号素燕[36066:33201308] willMoveToSuperview:
2020-10-25 10:02:42.965007+0800 公众号素燕[36066:33201308] didMoveToSuperview
```

从上面的方法调用顺序上来看，`SYHybridWebView`  在被添加到视图和从视图移除时都会调用 `willMoveToSuperview`，我们看下这个方法的官方解释：

- Summary

Tells the view that its superview is about to change to the specified superview.

- Discussion

The default implementation of this method does nothing. Subclasses can override it to perform additional actions whenever the superview changes.

大体意思说，当这个 view 的父视图发生变化时都会调用这个方法。那我们想到一种方案。添加一个标记为来区分调用 `willMoveToSuperview：` 是 add 还是 remove，当 remove 的时候，调用 `removeScriptMessageHandlerForName`：

```objective-c
// 视图被添加
- (void)didAddSubview:(UIView *)subview {
    [super didAddSubview:subview];
    self.isAdd = YES;
    NSLog(@"%@", NSStringFromSelector(_cmd));
}

// 当视图即将加入父视图时 / 当视图即将从父视图移除时调用
- (void)willMoveToSuperview:(nullable UIView *)newSuperview {
    [super willMoveToSuperview:newSuperview];
    if (!self.isAdd) {
        [self syDestoryed];
    }
    self.isAdd = NO;
    NSLog(@"%@ - %@", NSStringFromSelector(_cmd), newSuperview);
}
```

但这种方式有弊端，很大的弊端，你要保证 `SYHybridWebView` 一旦被添加到视图上，就不能改变它的父视图了。所有这个方法一时爽，后面维护的人火葬场。

## 继续思考，方案二

思考一个问题，webview 啥时候不用了，ViewController 可以知道，直接在 ViewController 被释放是调用 `removeScriptMessageHandlerForName`，那么我对外提供一个方法：

```objc
- (void)syDestoryed {
    [self.configuration.userContentController removeScriptMessageHandlerForName:kSYScriptEnvMsgName];
    [self.configuration.userContentController removeScriptMessageHandlerForName:kSYScriptMsgName];
}
```

在 `SYHybridWebViewController` 的 dealloc 方法中调用：

```objective-c
- (void)dealloc {
   [_webview syDestoryed];
}
```

这很好解决了内容泄露的问题。但是如果有人并没有使用 `SYHybridWebViewController` ，而直接用了 `SYHybridWebView`，忘记调用了 `syDestoryed`，那就引发了内存泄露，开发者肯定会说：”看看你写的是啥了，都有内存泄露了“。

我呵呵回答道：”你在 ViewController 的 dealloc 方法中调用下 `syDestoryed` 这个方法。“

开发者：”真坑！！！“

## 探索更优方案

上面二个方案都能解决问题，但是并不好。那再回到这个方法：

```objective-c
- (void)willMoveToSuperview:(nullable UIView *)newSuperview {
}
```

如果 ViewController 释放后，`SYHybridWebView` 发生内存泄露，调用 `willMoveToSuperview:` 这个方法的参数 newSuperview 值是啥 ？

答案是 null，因为 ViewController 释放后，newSuperview 就不存在了，那么我在 newSuperview 为空时调用 syDestoryed 方法不就可以了吗。

```objective-c
- (void)willMoveToSuperview:(nullable UIView *)newSuperview {
    [super willMoveToSuperview:newSuperview];
    if (!newSuperview) {
         [self syDestoryed];
    }
}
```



综上，我认为这是最优解！如果最优解恰好不能满足你的需求，你可以使用方式二，在 webview 不使用的使用，主动调用下 `syDestoryed` 方法。



## 最优解

昨天关于内存泄露的问题，我自认为是最优解，没想到打脸了。当我发完文章后，有人提出了一种更好的解法。今天再总结一下，感谢各位提出更好的方案。

回顾一下发生内存泄露的根本原因是 `SYHybridWebView` 持有了 `SYMessageHandler` 这个类的实例，之所以要持有它，是因为自定义插件最终要注册到 `SYMessageHandler` 这个类的实例中。如果我这样写，就不会产生内存泄露：

```objc
SYMessageHandler *messageHandler = [[SYMessageHandler alloc] init];
[self.configuration.userContentController addScriptMessageHandler:messageHandler name:kSYScriptMsgName];
```

最终解决方案是添加一个 weak proxy，写法如下：

```objc
[self.configuration.userContentController addScriptMessageHandler:(id <WKScriptMessageHandler>)[SYWeakProxy proxyWithTarget:self.msgHandler] name:kSYScriptMsgName];
```

社区中基本都参考 YYWeakProxy 的写法，我也不例外直接使用了它。