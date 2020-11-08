## howler 音频播放

howler.js is an audio library for the modern web. It defaults to Web Audio API and falls back to HTML5 Audio. This makes working with audio in JavaScript easy and reliable across all platforms.

Star 数 17.1k

[到 GitHub 中瞅瞅](https://github.com/goldfire/howler.js)

## 推荐理由

音频播放大概与我有缘，做 iOS 的时候做了音频播放器，做前端的时候也做了音频播放器。音频播放器做的简单点，直接基于系统提供的音频播放类或组件就好；做的难一点的需要根据音频流实时播放。最低实现成本，基于开源库，它帮你处理了各种异常情况。

Howler.js 是前端的音频播放开源库，底层实现默认采用的的是 web audio api，兜底策略采用的是 H5 提供的 audio 标签。这个库一个关键点是同时支持 wap 和 PC，而且支持自动缓存、单独或全局控制音量、一次播放多个音频、支持所有的编解码器以支持跨浏览器。

用起来非常简单：

```js
var sound = new Howl({
  src: ['sound.webm', 'sound.mp3'],
  autoplay: true,
  loop: true,
  volume: 0.5,
  onend: function() {
    console.log('Finished!');
  }
});
```