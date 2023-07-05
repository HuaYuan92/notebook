# 复杂度
[github](https://github.com/sisterAn/JavaScript-Algorithms/issues/1)
[blog](https://blog.csdn.net/qq_41523096/article/details/82142747)

## 一、为什么引入复杂度分析

我们知道，好的数据结构与算法能够大大缩短代码的执行时间与存储空间，那么我们如何去衡量它喃？本节就主要介绍算法性能的衡量指标—复杂度分析。

判断一段代码执行的效率最简单最直观的方式就是把它放在机器上执行一遍，自然就会得到算法的执行时间与占用内存大小。那么为什么还要引入复杂度分析喃？

这主要是因为，通过机器上运行代码来统计算法的性能，有很大的局限性，它容易受测试环境、数据规模影响：

统计结果易受测试环境影响：不同系统、处理器的机器测试结果可能出现很大的不同
统计结果易受数据本身、数据规模影响：不同的数据、不同长度的数据都可能对测试结果产生巨大的影响
而这些都不是我们想要看到的。我们需要的是不受外在因素影响的、大致的估计算法执行效率的方法。这就是使用复杂度分析的原因。

## 二、如何表示复杂度

如何表示算法复杂度，具体来讲就是代码执行的时间、执行消耗的存储空间。例如：
```js
function cal(n) {
    let sum = 0; // 1 unit_time
    let i = 0; // 1 unit_time
    for(; i <= n; i++) { // n unit_time
        sum += i; // n unit_time
    }
    return sum
}
```
从 CPU 的角度看，每段代码不过是读写数据或操作数据，尽管每次操作 CPU 执行的个数、执行的时间都不同，但我们粗咯把每次执行的时间都一致，称为 unit_time 。

所以上述代码总共执行 (2n+2)*unit_time 时间，即：T(n)=(2n+2)*unit_time ，所以，我们可以写成：

T(n) = O(f(n))
其中：

n：表示数据规模的大小
f(n)：表示每行代码执行的次数总和
O：表示代码的执行时间 T(n) 与 f(n) 表达式成正比
当 n 很大时，例如 10000，甚至更大，T(n) = O(f(n)) 可以表示为 T(n) = O(n) 。

这就是大 O 时间复杂度表示法。大 O 时间复杂度实际上并不具体表示代码真正的执行时间，而是表示代码执行时间随数据规模增长的变化趋势，所以，也叫作渐进时间复杂度（asymptotic time complexity），简称时间复杂度。

## 三、时间复杂度

当 n 无限大时，时间复杂度 T(n) 受 n 的最高数量级影响最大，与f(n) 中的常量、低阶、系数关系就不那么大了。所以我们分析代码的时间复杂度时，仅仅关注代码执行次数最多的那段就可以了。

看一个例子：
```js
function fun1(n) {
    let sum = 0,i = 0; 
    for(; i <= n; i++) {
        sum += i; 
    }
    return sum
}
function fun2(n) {
    let sum = 0, sum1 = 0, i = 0, j = 0; 
    for(; i <= n; i++) { // 循环1
        sum += i; 
    }
    for(i = 0; i <= n; i++) { // 循环2
        for(j = 0; j <= n; j++) { 
            sum += i * j; 
        }
    }
    return sum
}
function fun3(n) {
    let sum = 0, i = 0; 
    for(; i <= n; i++) { 
        sum += fun(i); 
    }
    return sum
```
fun1 中第1行都是常量，对 n 的影响不大，所以总的时间复杂度要看第2、3行的循环，即时间复杂度为： O(n) 。

fun2 中循环1的时间复杂度为 O(n) ，循环2的时间复杂度为 O(n2)，当 n 趋于无穷大时，总体的时间复杂度要趋于 O(n2) ，即上面代码的时间复杂度是 O(n2)。

fun3 的时间复杂度是 O(n * T(fun)) = O(n*n) ，即 O(n2) 。

所以：T(c+n)=O(n)，T(m+n)=O(max(m, n))，T(n) = T1(n) T2(m) = O(nm)，其中 c 为常量

常见复杂度（按数量阶递增）
多项式量级：

常量阶： O(1)：当算法中不存在循环语句、递归语句，即使有成千上万行的代码，其时间复杂度也是Ο(1)
对数阶：O(logn): 简单介绍一下
```js
let i=1;
while (i <= n)  {
  i = i * 2;
}
```
每次循环 i 都乘以 2 ，直至 i > n ，即执行过程是：20、21、22、…、2k、…、2x、 n
所以总执行次数 x ，可以写成 2x = n ，则时间复杂度为 O(log2n) 。这里是 2 ，也可以是其他常量 k ，时间复杂度也是： O(log3n) = O(log32 * log2n) = O(log2n)
线性阶：O(n)
线性对数阶：O(nlogn)
平方阶、立方阶、….、k次方阶：O(n2)、O(n3)、…、O(nk)
非多项式量阶：

指数阶：O(2k)
阶乘阶：O(n!)

## 四、空间复杂度

时间复杂度表示算法的执行时间与数据规模之间的增长关系。类比一下，空间复杂度表示算法的存储空间与数据规模之间的增长关系。例如：
```js
function fun(n) {
    let a = [];
    for (let i = 0; i < n; i++) {
        a.push(i);
    }
    return a;
}
```
以上代码我们可以清晰的看出代码执行的空间为 O(1+n) = O(n)，即为 i 及数组 a 占用的储存空间。

所以，空间复杂度分析比时间复杂度分析要简单很多。

## 五、平均时间复杂度
时间复杂度受数据本身影响，还分为：

最好时间复杂度：在最理想的情况下，执行这段代码的时间复杂度
最坏时间复杂度：在最糟糕的情况下，执行这段代码的时间复杂度
平均时间复杂度：所有情况下，求一个平均值，可以省略掉系数、低阶、常量