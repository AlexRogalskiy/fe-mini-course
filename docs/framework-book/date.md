## date-fns 快速处理时间

date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js. 

Star 数 23.2k。

[到 GitHub 中瞅瞅](https://github.com/date-fns/date-fns)

## 推荐理由

这个没啥好说的，程序员总有一天会和时间干上的。比如把当前时间转换成时间戳、把当前时间转换成 2020年09月04号、时区的处理。
自己写也没有多难！但太懒！

那就用 date-fns 吧，它是一个 JavaScript 时间处理工具库。

```js
import { 
compareAsc, 
format 
} from 'date-fns'

format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014-02-11'

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
dates.sort(compareAsc)
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
```