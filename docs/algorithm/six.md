# 六 一看就懂的队列及配套算法题

队列这种数据结构，前端需要了解的队列结构主要有：双端队列、滑动窗口，它们都是算法中是比较常用的数据结构。

因此，本节主要内容为：

* 数据结构：队列（Queue）
* 双端队列（Deque）
* 双端队列的应用：翻转字符串中的单词
* 滑动窗口
* 滑动窗口应用：无重复字符的最长公共子串<br>
最后来一道 leetcode 题目：滑动窗口最大值问题<br>
下面进入正文吧👇

## 一、数据结构：队列

队列和栈类似，不同的是队列是先进先出 (FIFO) 原则的有序集合，它的结构类似如下：
![image](https://camo.githubusercontent.com/05d2e945693a61c5bac06b21b49fbcad98e659faa3c2073c95fe54ac4a8b6c32/687474703a2f2f7265736f757263652e6d757969792e636e2f696d6167652f32303230303331343232323735332e706e67)

常见队列的操作有： enqueue(e) 进队、 dequeue() 出队、 isEmpty() 是否是空队、 front() 获取队头元素、clear() 清空队，以及 size() 获取队列长度。<br>
#### 代码实现
```js
function Queue() {
  let items = []
  this.enqueue = function(e) {
    items.push(e)
  }
  this.dequeue = function() {
    return items.shift()
  }
  this.isEmpty = function() {
    return items.length === 0
  }
  this.front = function() {
    return items[0]
  }
  this.clear = function() { 
    items = [] 
  }
  this.size = function() {
    return items.length
  }
}
```
查找：从对头开始查找，从时间复杂度为 O(n)<br>
插入或删除：进栈与出栈的时间复杂度为 O(1)

## 二、双端队列（Deque）
#### 1. 什么是 Deque
   
Deque 在原有队列的基础上扩充了：队头、队尾都可以进队出队，它的数据结构如下：
![Image](https://camo.githubusercontent.com/9f9fd8150426bebe7f439b84781ac413a48d88e832d5b24b67d4e2e67f7cbdd9/687474703a2f2f7265736f757263652e6d757969792e636e2f696d6167652f32303230303432363231313033312e706e67)

#### 代码实现
```js
function Deque() {
  let items = []
  this.addFirst = function(e) {
    items.unshift(e)
  }
  this.removeFirst = function() {
    return items.shift()
  }
  this.addLast = function(e) {
    items.push(e)
  }
  this.removeLast = function() {
    return items.pop()
  }
  this.isEmpty = function() {
    return items.length === 0
  }
  this.front = function() {
    return items[0]
  }
  this.clear = function() { 
    items = [] 
  }
  this.size = function() {
    return items.length
  }
}
```
下面看一道经典的双端队列问题👇
#### 2. 字节&leetcode151：翻转字符串里的单词
给定一个字符串，逐个翻转字符串中的每个单词。
##### 示例 1：
```text
输入: "the sky is blue"
输出: "blue is sky the"
```
##### 示例 2：
```text
输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
```
说明：
* 无空格字符构成一个单词。
* 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
* 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

解题思路：使用双端队列解题

* 首先去除字符串左右空格
* 逐个读取字符串中的每个单词，依次放入双端队列的对头
* 再将队列转换成字符串输出（已空格为分隔符）

画图理解：
![image](https://camo.githubusercontent.com/a4a1d62844291adab189d132429f4894ea4699e7d16366e652639d60da481c4f/687474703a2f2f7265736f757263652e6d757969792e636e2f696d6167652f32303230303431363232303935302e706e67)
![image](https://camo.githubusercontent.com/27211dced81ad85968cdc75f53f407523435efff9d0e48bb2ed9a357043f4abf/687474703a2f2f7265736f757263652e6d757969792e636e2f696d6167652f32303230303431363232303834312e706e67)
![image](https://camo.githubusercontent.com/92e7b015ceef171aebc18d2f4753691d9241fc6da5005dfe851f6a0a4ec33822/687474703a2f2f7265736f757263652e6d757969792e636e2f696d6167652f32303230303431363232303835392e706e67)

#### 代码实现：
```js
var reverseWords = function(s) {
    let left = 0
    let right = s.length - 1
    let queue = []
    let word = ''
    while (s.charAt(left) === ' ') left ++
    while (s.charAt(right) === ' ') right --
    while (left <= right) {
        let char = s.charAt(left)
        if (char === ' ' && word) {
            queue.unshift(word)
            word = ''
        } else if (char !== ' '){
            word += char
        }
        left++
    }
    queue.unshift(word)
    return queue.join(' ')
};
```
更多解法详见 [图解字节&leetcode151：翻转字符串里的单词](https://github.com/sisterAn/JavaScript-Algorithms/issues/18)

### 三、滑动窗口
#### 1. 什么是滑动窗口
这是队列的另一个重要应用。<br>
顾名思义，滑动窗口就是一个运行在一个大数组上的子列表，该数组是一个底层元素集合。<br>
假设有数组 [a b c d e f g h ]，一个大小为 3 的 滑动窗口在其上滑动，则有：
```text
[a b c]
  [b c d]
    [c d e]
      [d e f]
        [e f g]
          [f g h]
```
一般情况下就是使用这个窗口在数组的 合法区间 内进行滑动，同时 动态地 记录一些有用的数据，很多情况下，能够极大地提高算法地效率。
下面看一道经典的滑动窗口问题👇
#### 2. 字节&Leetcode3：无重复字符的最长子串
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
##### 示例 1:
```text
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```
##### 示例 2:
```text
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```
##### 示例 3:
```text
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```
解题思路： 使用一个数组来维护滑动窗口

遍历字符串，判断字符是否在滑动窗口数组里

* 不在则 push 进数组
* 在则删除滑动窗口数组里相同字符及相同字符前的字符，然后将当前字符 push 进数组
* 然后将 max 更新为当前最长子串的长度
* 遍历完，返回 max 即可

画图帮助理解一下：
![image](https://camo.githubusercontent.com/b2cac439d52b0201b4f9fcc69bd9035a791ab2f5219ca081fea8263746f8b230/687474703a2f2f7265736f757263652e6d757969792e636e2f696d6167652f32303230303432353131313432372e706e67)

#### 代码实现：
```js
var lengthOfLongestSubstring = function(s) {
    let arr = [], max = 0
    for(let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i])
        if(index !== -1) {
            arr.splice(0, index+1);
        }
        arr.push(s.charAt(i))
        max = Math.max(arr.length, max) 
    }
    return max
};
```
时间复杂度：O(n2)， 其中 arr.indexOf() 时间复杂度为 O(n) ，arr.splice(0, index+1) 的时间复杂度也为 O(n)<br>

空间复杂度：O(n)

更多解法详见 [字节&Leetcode3：无重复字符的最长子串](https://github.com/sisterAn/JavaScript-Algorithms/issues/21)

### 四、leetcode239：滑动窗口最大值问题
给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

```text
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
```
解释:
```text
滑动窗口的位置 最大值

[1 3 -1] -3 5 3 6 7 3
1 [3 -1 -3] 5 3 6 7 3
1 3 [-1 -3 5] 3 6 7 5
1 3 -1 [-3 5 3] 6 7 5
1 3 -1 -3 [5 3 6] 7 6
1 3 -1 -3 5 [3 6 7] 7
```
提示:

你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
[answer](https://github.com/sisterAn/JavaScript-Algorithms/issues/33)




