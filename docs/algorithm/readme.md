### 算法

## 一 如何分析、统计算法的执行效率和资源消耗
[github](https://github.com/sisterAn/JavaScript-Algorithms/issues/1)
[blog](https://blog.csdn.net/qq_41523096/article/details/82142747)

一、为什么引入复杂度分析

我们知道，好的数据结构与算法能够大大缩短代码的执行时间与存储空间，那么我们如何去衡量它喃？本节就主要介绍算法性能的衡量指标—复杂度分析。

判断一段代码执行的效率最简单最直观的方式就是把它放在机器上执行一遍，自然就会得到算法的执行时间与占用内存大小。那么为什么还要引入复杂度分析喃？

这主要是因为，通过机器上运行代码来统计算法的性能，有很大的局限性，它容易受测试环境、数据规模影响：

统计结果易受测试环境影响：不同系统、处理器的机器测试结果可能出现很大的不同
统计结果易受数据本身、数据规模影响：不同的数据、不同长度的数据都可能对测试结果产生巨大的影响
而这些都不是我们想要看到的。我们需要的是不受外在因素影响的、大致的估计算法执行效率的方法。这就是使用复杂度分析的原因。

二、如何表示复杂度
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

三、时间复杂度
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
四、空间复杂度
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

五、平均时间复杂度
时间复杂度受数据本身影响，还分为：

最好时间复杂度：在最理想的情况下，执行这段代码的时间复杂度
最坏时间复杂度：在最糟糕的情况下，执行这段代码的时间复杂度
平均时间复杂度：所有情况下，求一个平均值，可以省略掉系数、低阶、常量

## 二 从Chrome V8源码看JavaScript数组
[github](https://github.com/sisterAn/JavaScript-Algorithms/issues/2)

一、数组（基础）
一种最基础的数据结构，每种编程语言都有，它编号从 0 开始，代表一组连续的储存结构，用来储存同一种类型的数据。
```js
let arr = [1, 2, 3]
```

它的这种特定的存储结构（连续存储空间存储同一类型数据）决定了：

优点

随机访问：可以通过下标随机访问数组中的任意位置上的数据
缺点

对数据的删除和插入不是很友好
查找： 根据下标随机访问的时间复杂度为 O(1)；

插入或删除： 时间复杂度为 O(n)；

在 JavaScript 中的数组几乎是万能的，它不光可以作为一个普通的数组使用，可以作为栈或队列使用。
```js
//数组：
let array = [1, 2, 3]
//栈：
let stack = [1, 2, 3]
// 进栈
stack.push(4)
// 出栈
stcak.pop()
//队列：
let queue = [1, 2, 3]
// 进队
queue.push(4)
// 出队
queue.shift()
```
二、JavaScript 中，数组可以保存不同类型值
看一下 Chrome v8 源码：
```js
// The JSArray describes JavaScript Arrays
//  Such an array can be in one of two modes:
//    - fast, backing storage is a FixedArray and length <= elements.length();
//       Please note: push and pop can be used to grow and shrink the array.
//    - slow, backing storage is a HashTable with numbers as keys.
class JSArray: public JSObject {
 public:
  // [length]: The length property.
  DECL_ACCESSORS(length, Object)
    
  // ...
   
  // Number of element slots to pre-allocate for an empty array.
  static const int kPreallocatedArrayElements = 4;
};
```
我们可以看到 JSArray 是继承自 JSObject 的，所以在 JavaScript 中，数组可以是一个特殊的对象，内部也是以 key-value 形式存储数据，所以 JavaScript 中的数组可以存放不同类型的值。

三、JavaScript 中，数组的存储
```js
// The JSArray describes JavaScript Arrays
//  Such an array can be in one of two modes:
//    - fast, backing storage is a FixedArray and length <= elements.length();
//       Please note: push and pop can be used to grow and shrink the array.
//    - slow, backing storage is a HashTable with numbers as keys.
class JSArray: public JSObject {
 public:
  // [length]: The length property.
  DECL_ACCESSORS(length, Object)
    
  // ...
   
  // Number of element slots to pre-allocate for an empty array.
  static const int kPreallocatedArrayElements = 4;
};
```
JSArray 继承于 JSObject ，从注释上看，它有两种存储方式：

fast：存储结构是 FixedArray ，并且数组长度 <= elements.length() ，push 或 pop 时可能会伴随着动态扩容或减容
slow：存储结构是 HashTable（哈希表），并且数组下标作为 key
fast 模式下数组在源码里面叫 FastElements ，而 slow 模式下的叫做 SlowElements 。

1. 快数组（FastElements）
FixedArray 是 V8 实现的一个类似于数组的类，它表示一段连续的内存，可以使用索引直接定位。新创建的空数组默认就是快数组。当数组满（数组的长度达到数组在内存中申请的内存容量最大值）的时候，继续 push 时， JSArray 会进行动态的扩容，以存储更多的元素。

2. 慢数组（SlowElements）
慢数组以哈希表的形式存储在内存空间里，它不需要开辟连续的存储空间，但需要额外维护一个哈希表，与快数组相比，性能相对较差。
```js
// src/objects/dictionary.h
class EXPORT_TEMPLATE_DECLARE(V8_EXPORT_PRIVATE) Dictionary
    : public HashTable<Derived, Shape> {
  using DerivedHashTable = HashTable<Derived, Shape>;

 public:
  using Key = typename Shape::Key;
  // Returns the value at entry.
  inline Object ValueAt(InternalIndex entry);
  inline Object ValueAt(const Isolate* isolate, InternalIndex entry);
  
  // ...
};
```
从源码中可以看出，它的内部就是一个 HashTable。

3. 什么时候会从 fast 转变为 slow 喃？
从 Chrome V8 源码上看，
```js
// src/objects/js-objects.h
static const uint32_t kMaxGap = 1024;

// src/objects/dictionary.h
// JSObjects prefer dictionary elements if the dictionary saves this much
// memory compared to a fast elements backing store.
static const uint32_t kPreferFastElementsSizeFactor = 3;

// src/objects/js-objects-inl.h
// If the fast-case backing storage takes up much more memory than a dictionary
// backing storage would, the object should have slow elements.
// static
static inline bool ShouldConvertToSlowElements(uint32_t used_elements,
                                               uint32_t new_capacity) {
  uint32_t size_threshold = NumberDictionary::kPreferFastElementsSizeFactor *
                            NumberDictionary::ComputeCapacity(used_elements) *
                            NumberDictionary::kEntrySize;
  // 快数组新容量是扩容后的容量3倍之多时，也会被转成慢数组
  return size_threshold <= new_capacity;
}

static inline bool ShouldConvertToSlowElements(JSObject object,
                                               uint32_t capacity,
                                               uint32_t index,
                                               uint32_t* new_capacity) {
  STATIC_ASSERT(JSObject::kMaxUncheckedOldFastElementsLength <=
                JSObject::kMaxUncheckedFastElementsLength);
  if (index < capacity) {
    *new_capacity = capacity;
    return false;
  }
  // 当加入的索引值（例如例3中的2000）比当前容量capacity 大于等于 1024时，
  // 返回true，转为慢数组
  if (index - capacity >= JSObject::kMaxGap) return true;
  *new_capacity = JSObject::NewElementsCapacity(index + 1);
  DCHECK_LT(index, *new_capacity);
  // TODO(ulan): Check if it works with young large objects.
  if (*new_capacity <= JSObject::kMaxUncheckedOldFastElementsLength ||
      (*new_capacity <= JSObject::kMaxUncheckedFastElementsLength &&
       ObjectInYoungGeneration(object))) {
    return false;
  }
  return ShouldConvertToSlowElements(object.GetFastElementsUsage(),
                                     *new_capacity);
}
```
所以，当处于以下情况时，快数组会被转变为慢数组：

当加入的索引值 index 比当前容量 capacity 差值大于等于 1024 时（index - capacity >= 1024）
快数组新容量是扩容后的容量 3 倍之多时
例如：向快数组里增加一个大索引同类型值
```js
var arr = [1, 2, 3]
arr[2000] = 10;
```
当往 arr 增加一个 2000 的索引时，arr 被转成慢数组。节省了大量的内存空间（从索引为 2 到索引为 2000）。

4. 什么时候会从 slow 转变为 fast 喃？
我们已经知道在什么时候会出现由快变慢，那由慢变快就很简单了
```js
static bool ShouldConvertToFastElements(JSObject object,
                                        NumberDictionary dictionary,
                                        uint32_t index,
                                        uint32_t* new_capacity) {
  // If properties with non-standard attributes or accessors were added, we
  // cannot go back to fast elements.
  if (dictionary.requires_slow_elements()) return false;
  // Adding a property with this index will require slow elements.
  if (index >= static_cast<uint32_t>(Smi::kMaxValue)) return false;
  if (object.IsJSArray()) {
    Object length = JSArray::cast(object).length();
    if (!length.IsSmi()) return false;
    *new_capacity = static_cast<uint32_t>(Smi::ToInt(length));
  } else if (object.IsJSArgumentsObject()) {
    return false;
  } else {
    *new_capacity = dictionary.max_number_key() + 1;
  }
  *new_capacity = Max(index + 1, *new_capacity);
  uint32_t dictionary_size = static_cast<uint32_t>(dictionary.Capacity()) *
                             NumberDictionary::kEntrySize;
  // Turn fast if the dictionary only saves 50% space.
  return 2 * dictionary_size >= *new_capacity;
}
```
当慢数组的元素可存放在快数组中且长度在 smi 之间且仅节省了50%的空间，则会转变为快数组

四、JavaScript 中，数组的动态扩容与减容（FastElements）
默认空数组初始化大小为 4 :
```js
// Number of element slots to pre-allocate for an empty array.
static const int kPreallocatedArrayElements = 4;
```
在 JavaScript 中，当数组执行 push 操作时，一旦发现数组内存不足，将进行扩容。

在 Chrome 源码中， push 的操作是用汇编实现的，在 c++ 里嵌入的汇编，以提高执行效率，并且在汇编的基础上用 c++ 封装了一层，在编译执行的时候，会将这些 c++ 代码转成汇编代码。

计算新容量的函数：
```js
// js-objects.h
static const uint32_t kMinAddedElementsCapacity = 16;

// code-stub-assembler.cc
Node* CodeStubAssembler::CalculateNewElementsCapacity(Node* old_capacity,
                                                      ParameterMode mode) {
  CSA_SLOW_ASSERT(this, MatchesParameterMode(old_capacity, mode));
  Node* half_old_capacity = WordOrSmiShr(old_capacity, 1, mode);
  Node* new_capacity = IntPtrOrSmiAdd(half_old_capacity, old_capacity, mode);
  Node* padding =
      IntPtrOrSmiConstant(JSObject::kMinAddedElementsCapacity, mode);
  return IntPtrOrSmiAdd(new_capacity, padding, mode);
}
```
所以扩容后新容量计公式为：

new_capacity = old_capacity /2 + old_capacity + 16

即老的容量的 1.5 倍加上 16 。初始化为 4 个，当 push 第 5 个的时候，容量将会变成：

new_capacity = 4 / 2 + 4 + 16 = 22

接着申请一块这么大的内存，把老的数据拷过去，把新元素放在当前 length 位置，然后将数组的 length + 1，并返回 length。

所以，扩容可以分为以下几步：

push 操作时，发现数组内存不足
申请 new_capacity = old_capacity /2 + old_capacity + 16 那么长度的内存空间
将数组拷贝到新内存中
把新元素放在当前 length 位置
数组的 length + 1
返回 length
整个过程，用户是无感知的，不像 C，需用用户手动申请内存空间。

当数组执行 pop 操作时，会判断 pop 后数组的容量，是否需要进行减容。

不同于数组的 push 使用汇编实现的， pop 使用 c++ 实现的。

判断是否进行减容：
```js
if (2 * length <= capacity) {
  // If more than half the elements won't be used, trim the array.
  isolate->heap()->RightTrimFixedArray(*backing_store, capacity - length);
} else {
  // Otherwise, fill the unused tail with holes.
  BackingStore::cast(*backing_store)->FillWithHoles(length, old_length);
}
```
所以，当数组 pop 后，如果数组容量大于等于 length 的 2 倍，则进行容量调整，使用 RightTrimFixedArray 函数，计算出需要释放的空间大小，做好标记，等待 GC 回收；如果数组容量小于 length 的 2 倍，则用 holes 对象填充。

所以，减容可以分为以下几步：

pop 操作时，获取数组 length
获取 length - 1 上的元素（要删除的元素）
数组 length - 1
判断数组的总容量是否大于等于 length - 1 的 2 倍
是的话，使用 RightTrimFixedArray 函数，计算出需要释放的空间大小，并做好标记，等待 GC 回收
不是的话，用 holes 对象填充
返回要删除的元素
五、解答开篇问题
JavaScript 中， JSArray 继承自 JSObject ，或者说它就是一个特殊的对象，内部是以 key-value 形式存储数据，所以 JavaScript 中的数组可以存放不同类型的值。它有两种存储方式，快数组与慢数组，初始化空数组时，使用快数组，快数组使用连续的内存空间，当数组长度达到最大时，JSArray 会进行动态的扩容，以存储更多的元素，相对慢数组，性能要好得多。当数组中 hole 太多时，会转变成慢数组，即以哈希表的方式（ key-value 的形式）存储数据，以节省内存空间。

六、最后附赠一道前端面试题（腾讯）：数组扁平化、去重、排序
关于 Array 的属性、方法这里不再做介绍，详看 MDN Array 。

面试题：

已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

答案：
```js
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]
// 扁平化
let flatArr = arr.flat(4)
// 去重
let disArr = Array.from(new Set(flatArr))
// 排序
let result = disArr.sort(function(a, b) {
    return a-b
})
console.log(result)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
```

## 三 从浏览器缓存淘汰策略和Vue的keep-alive学习LRU算法
[github](https://github.com/sisterAn/JavaScript-Algorithms/issues/9)

一、LRU 缓存淘汰策略
缓存在计算机网络上随处可见，例如：当我们首次访问一个网页时，打开很慢，但当我们再次打开这个网页时，打开就很快。

这就涉及缓存在浏览器上的应用：浏览器缓存。当我们打开一个网页时，例如 https://github.com/sisterAn/JavaScript-Algorithms ，它会在发起真正的网络请求前，查询浏览器缓存，看是否有要请求的文件，如果有，浏览器将会拦截请求，返回缓存文件，并直接结束请求，不会再去服务器上下载。如果不存在，才会去服务器请求。

其实，浏览器中的缓存是一种在本地保存资源副本，它的大小是有限的，当我们请求数过多时，缓存空间会被用满，此时，继续进行网络请求就需要确定缓存中哪些数据被保留，哪些数据被移除，这就是浏览器缓存淘汰策略，最常见的淘汰策略有 FIFO（先进先出）、LFU（最少使用）、LRU（最近最少使用）。

LRU （ Least Recently Used ：最近最少使用 ）缓存淘汰策略，故名思义，就是根据数据的历史访问记录来进行淘汰数据，其核心思想是 如果数据最近被访问过，那么将来被访问的几率也更高 ，优先淘汰最近没有被访问到的数据。



二、LRU 在 keep-alive (Vue) 上的实现
1. keep-alive
keep-alive 在 vue 中用于实现组件的缓存，当组件切换时不会对当前组件进行卸载。
```js
<!-- 基本 -->
<keep-alive>
  <component is="view"></component>
</keep-alive>
```
最常用的两个属性：include 、 exculde ，用于组件进行有条件的缓存，可以用逗号分隔字符串、正则表达式或一个数组来表示。

在 2.5.0 版本中，keep-alive 新增了 max 属性，用于最多可以缓存多少组件实例，一旦这个数字达到了，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉，看，这里就应用了 LRU 算法。即在 keep-alive 中缓存达到 max，新增缓存实例会优先淘汰最近没有被访问到的实例🎉🎉🎉

下面我们透过 vue 源码看一下具体的实现👇

2. 从 vue 源码看 keep-alive 的实现
```js
export default {
  name: "keep-alive",
  // 抽象组件属性 ,它在组件实例建立父子关系的时候会被忽略,发生在 initLifecycle 的过程中
  abstract: true, 
  props: {
    // 被缓存组件
    include: patternTypes, 
    // 不被缓存组件
    exclude: patternTypes,
    // 指定缓存大小
    max: [String, Number] 
  },
  created() {
    // 初始化用于存储缓存的 cache 对象
    this.cache = Object.create(null);
    // 初始化用于存储VNode key值的 keys 数组
    this.keys = []; 
  },
  destroyed() {
    for (const key in this.cache) {
      // 删除所有缓存
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },
  mounted() {
    // 监听缓存（include）/不缓存（exclude）组件的变化
    // 在变化时，重新调整 cache
    // pruneCache：遍历 cache，如果缓存的节点名称与传入的规则没有匹配上的话，就把这个节点从缓存中移除
    this.$watch("include", val => {
      pruneCache(this, name => matches(val, name));
    });
    this.$watch("exclude", val => {
      pruneCache(this, name => !matches(val, name));
    });
  },
  render() {
    // 获取第一个子元素的 vnode
    const slot = this.$slots.default;
    const vnode: VNode = getFirstComponentChild(slot);
    const componentOptions: ?VNodeComponentOptions =
      vnode && vnode.componentOptions;
    if (componentOptions) {
      // name 不在 inlcude 中或者在 exlude 中则直接返回 vnode，否则继续进行下一步
      // check pattern
      const name: ?string = getComponentName(componentOptions);
      const { include, exclude } = this;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode;
      }
      
      const { cache, keys } = this;
      // 获取键，优先获取组件的 name 字段，否则是组件的 tag
      const key: ?string =
        vnode.key == null
          ? // same constructor may get registered as different local components
            // so cid alone is not enough (#3269)
            componentOptions.Ctor.cid +
            (componentOptions.tag ? `::${componentOptions.tag}` : "")
          : vnode.key;
        
      // --------------------------------------------------
      // 下面就是 LRU 算法了，
      // 如果在缓存里有则调整，
      // 没有则放入（长度超过 max，则淘汰最近没有访问的）
      // --------------------------------------------------
      // 如果命中缓存，则从缓存中获取 vnode 的组件实例，并且调整 key 的顺序放入 keys 数组的末尾
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      }
      // 如果没有命中缓存,就把 vnode 放进缓存
      else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        // 如果配置了 max 并且缓存的长度超过了 this.max，还要从缓存中删除第一个
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }
      
      // keepAlive标记位
      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0]);
  }
};

// 移除 key 缓存
function pruneCacheEntry (
  cache: VNodeCache,
  key: string,
  keys: Array<string>,
  current?: VNode
) {
  const cached = cache[key]
  if (cached && (!current || cached.tag !== current.tag)) {
    cached.componentInstance.$destroy()
  }
  cache[key] = null
  remove(keys, key)
}

// remove 方法（shared/util.js）
/**
 * Remove an item from an array.
 */
export function remove (arr: Array<any>, item: any): Array<any> | void {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}
```

在 keep-alive 缓存超过 max 时，使用的缓存淘汰算法就是 LRU 算法，它在实现的过程中用到了 cache 对象用于保存缓存的组件实例及 key 值，keys 数组用于保存缓存组件的 key ，当 keep-alive 中渲染一个需要缓存的实例时：

判断缓存中是否已缓存了该实例，缓存了则直接获取，并调整 key 在 keys 中的位置（移除 keys 中 key ，并放入 keys 数组的最后一位）
如果没有缓存，则缓存该实例，若 keys 的长度大于 max （缓存长度超过上限），则移除 keys[0] 缓存
下面我们来自己实现一个 LRU 算法吧

三、leetcode：LRU 缓存机制
运用你所掌握的数据结构，设计和实现一个 LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和写入数据 put 。

获取数据 get(key) - 如果密钥 ( key ) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1 。
写入数据 put(key, value) - 如果密钥不存在，则写入数据。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据，从而为新数据留出空间。

进阶:

你是否可以在 O(1) 时间复杂度内完成这两种操作？

示例:
```js
LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
```
前面已经介绍过了 keep-alive 中LRU实现源码，现在来看这道题是不是很简单，可以尝试自己解答一下，然后思考一下有没有什么继续优化的！欢迎提供更多的解法

答案已提交到 [#7](https://github.com/sisterAn/JavaScript-Algorithms/issues/7)

## 四 链表原来如此简单
[github](https://github.com/sisterAn/JavaScript-Algorithms/issues/12)

链表相对于数组来说，要复杂的多，首先，链表不需要连续的内存空间，它是由一组零散的内存块透过指针连接而成，所以，每一个块中必须包含当前节点内容以及后继指针。最常见的链表类型有单链表、双链表以及循环链表。

确定解题的数据结构：单链表、双链表或循环链表等
确定解题思路：如何解决问题
画图实现：画图可以帮助我们发现思维中的漏洞（一些思路不周的情况）
确定边界条件：思考解题中是否有边界问题以及如何解决
代码实现：解题完成
本文会给常用链表（单链表、双链表以及循环链表）的基本操作已经代码实现，并给出实现思路，这些都是链表解题的基石。

一、单链表

![单链表](https://camo.githubusercontent.com/1ff6e05c5a770474c4e98705cabd818da222f9dd/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3237333530362f313538343138393434353333342d64363537623037372d373262332d346439352d386164622d6439313862363534333535372e706e67)
```js
function List() {
  // 节点
  let Node = function (element) {
    this.element = element;
    this.next = null;
  };
  // 初始头节点为 null
  let head = null;
  // 链表长度
  let length = 0;
  // 操作
  this.getList = function () {
    return head
  };
  this.search = function (element) {
    let p = element;
    if (!p) {
      return false
    }
    while (p) {
      if (p.element === element) {
        return true
      }
      p = p.next;
    }
    return false
  };
  this.append = function (element) {
    let node = new Node(element);
    let p = head;
    if (!head) {
      head = node
    } else {
      while (p.next) {
        p = p.next;
      }
      p.next = node;
    }
    length++
  };
  this.insert = function (position, element) {
    let node = new Node(element);
    if (position >= 0 && position <= length) {
      let prev = head;
      let curr = head;
      let index = 0;
      if (position === 0) {
        node.next = head;
        head = node;
      } else {
        while (index < position) {
          prev = curr;
          curr = curr.next;
          index++
        }
        prev.next = node;
        node.next = curr;
      }
      length++
    } else {
      return null
    }

  };
  this.remove = function (element) {
    let p = head;
    let prev = head;
    if (!head) {
      return false
    }
    while (p) {
      if (p.element === element) {
        p = p.next;
        prev.next = p;
      } else {
        prev = p;
        p = p.next;
      }
    }

  };
  this.isEmpty = function () {
    return length === 0
  };
  this.size = function () {
    return length
  };

}

```
二 双链表

![双链表](https://camo.githubusercontent.com/3141298bf41dc4da5aeff6e62b0dc722281ea54f/687474703a2f2f7265736f757263652e6d757969792e636e2f696d6167652f32303230303332363233303934372e706e67)

```js
function DoublyLinkList() {
  let Node = function (element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  };
  // 初始节点
  let head = null;
  // 尾部节点
  let tail = null;

  let length = 0;
  this.search = function (element) {

  };
  this.insert = function (position, element) {
    let node = new Node(element);
    if (position === 0) {
      if (!head) {
        head = node;
        tail = node;
      } else {
        node.next = head;
        head.prev = node;
        head = node;
      }
    } else if (position === length) {
      tail.next = node;
      node.prev = tail;
      tail = node;

    } else if (position > 0 && position < length) {
      let index = 0;
      let curr = head;
      let prev = head;
      while (index < position) {
        prev = curr;
        curr = curr.next;
        index++
      }
      prev.next = node;
      node.next = curr;
      curr.prev = node;
      node.prev = prev;

    } else {
      return null
    }
    length++;
    return true
  };
  this.remove = function (position) {
    if (position >= 0 && position < length && length > 0) {
      if (position === 0) {
        if (length === 1) {
          head = null;
          tail = null;
        } else {
          head = head.next;
          head.prev = null
        }
      } else if (position === length - 1) {
        tail = tail.prev;
        tail.next = null;
      } else {
        let curr = head;
        let prev = head;
        let index = 0;
        while (index < position) {
          curr = curr.next;
          prev = curr.prev;
          index++
        }
        prev.next = curr.next;
        curr.next.prev = prev;
      }
      length--;
      return true

    } else {
      return null
    }

  };
  this.isEmpty = function () {
    return length === 0
  };
  this.size = function () {
    return length
  }

}
```
三 循环单链表/循环双链表
![循环链表](https://camo.githubusercontent.com/c44b1fda0edbd1e1ad68652afe58b42abe277dc0/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3237333530362f313538343139343133323631352d30333861333633632d326338362d343463382d623539612d3133336464353166656337322e706e67)
循环双链表和双链表不同的是：

循环双链表的 tail.next（ tail 的后继指针） 为 null ，循环双链表的 tail.next 为 head
循环双链表的 head.prev（ head 的前驱指针） 为 null ，循环双链表的 head.prev 为 tail

[将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。](https://github.com/sisterAn/JavaScript-Algorithms/issues/11) 

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

## 五 全方位解读前端用到的栈结构（调用栈、堆、垃圾回收等）
[github](https://github.com/sisterAn/JavaScript-Algorithms/issues/24)

栈结构很简单，我们可以通过数组就能模拟出一个栈结构，但仅仅介绍栈结构就太不前端了，本节从栈结构开始延伸到浏览器中 JavaScript 运行机制，还有存储机制上用到的栈结构及相关数据结构，一文吃透所有的前端栈知识。

以后再提到栈时，我们不再仅限于 LIFO 了，而是一个有深度的栈。

这部分是前端进阶资深必备，如果你想打造高性能的前端应用，也需要了解这块，同时它也是面试的常见考察点。

理解栈对于我们理解 JavaScript 语言至关重要，本文主要从以下几个方面介绍栈：

首先介绍栈及代码实现
介绍 JavaScript 运行机制及栈在其中的应用
详细介绍调用栈及我们开发中如何利用调用栈
JS 内存机制：栈（基本类型、引用类型地址）与堆（引用类型数据）
最后来一份总结与字节&leetcode刷题，实现最小栈
本节吃透栈原理，之后几天会每日一题，刷透栈题目，下面进入正文吧

一、 栈

栈是一种遵从后进先出 (LIFO / Last In First Out) 原则的有序集合。栈的操作主要有： push(e) (进栈)、 pop() (出栈)、 isEmpty() (判断是否是空栈)、 size() (栈大小)，以及 clear() 清空栈，具体实现也很简单。

二、代码实现
```js
function Stack() {
  let items = []
  this.push = function(e) { 
    items.push(e) 
  }
  this.pop = function() { 
    return items.pop() 
  }
  this.isEmpty = function() { 
    return items.length === 0 
  }
  this.size = function() { 
    return items.length 
  }
  this.clear = function() { 
    items = [] 
  }
}
```
查找：从栈头开始查找，时间复杂度为 O(n)

插入或删除：进栈与出栈的时间复杂度为 O(1)

三、浏览器中 JS 运行机制

我们知道 JavaScript 是单线程的，所谓单线程，是指在 JavaScript 引擎中负责解释和执行 JavaScript 代码的线程唯一，同一时间上只能执行一件任务。

为什么是单线程的喃？这是因为 JavaScript 可以修改 DOM 结构，如果 JavaScript 引擎线程不是单线程的，那么可以同时执行多段 JavaScript，如果这多段 JavaScript 都修改 DOM，那么就会出现 DOM 冲突。

为了避免 DOM 渲染的冲突，可以采用单线程或者死锁，JavaScript 采用了单线程方案。

但单线程有一个问题：如果任务队列里有一个任务耗时很长，导致这个任务后面的任务一直排队等待，就会发生页面卡死，严重影响用户体验。

为了解决这个问题，JavaScript 将任务的执行模式分为两种：同步和异步。
```js
// 同步任务
let a = 1
console.log(a) // 1// 同步任务
let a = 1
console.log(a) // 1
// 异步任务
setTimeout(() => {
  console.log('时间到')
}, 1000)
```
同步任务都在主线程（这里的主线程就是 JavaScript 引擎线程）上执行，会形成一个 调用栈 ，又称 **执行栈 **；

除了主线程外，还有一个任务队列（也称消息队列），用于管理异步任务的 事件回调 ，在 调用栈 的任务执行完毕之后，系统会检查任务队列，看是否有可以执行的异步任务。

注意：任务队列存放的是异步任务的事件回调

例如上例：

```js
setTimeout(() => {
    console.log('时间到')
}, 1000)
```
在执行这段代码时，并不会立刻打印 ，只有定时结束后（1s）才打印。 setTimeout 本身是同步执行的，放入任务队列的是它的回调函数。

下面我们重点看一下主线程上的调用栈。

四、调用栈

我们从以下两个方面介绍调用栈：

* 调用栈的用来做什么
* 在开发中，如何利用调用栈

1. 调用栈的职责
我们知道，在 JavaScript 中有很多函数，经常会出现一个函数调用另外一个函数的情况，调用栈就是用来管理函数调用关系的一种栈结构 。

那么它是如何去管理函数调用关系喃？我们举例说明：
```js
var a = 1
function add(a) {
  var b = 2
  let c = 3
  return a + b + c
}

// 函数调用
add(a)
```
这段代码很简单，就是创建了一个 add 函数，然后调用了它。
具体实现请参考[github](https://github.com/sisterAn/JavaScript-Algorithms/issues/24)

调用栈是 JavaScript 用来管理函数执行上下文的一种数据结构，它记录了当前函数执行的位置，哪个函数正在被执行。 如果我们执行一个函数，就会为函数创建执行上下文并放入栈顶。 如果我们从函数返回，就将它的执行上下文从栈顶弹出。 也可以说调用栈是用来管理这种执行上下文的栈，或称执行上下文栈（执行栈）。

2. 懂调用栈的开发人员有哪些优势

* 栈溢出

我们知道调用栈是用来管理执行上下文的一种数据结构，它是有大小的，当入栈的上下文过多的时候，它就会报栈溢出，例如：
```js
function add() {
  return 1 + add()
}

add()
```
add 函数不断的递归，不断的入栈，调用栈的容量有限，它就溢出了，所以，我们日常的开发中，一定要注意此类代码的出现。

* 在浏览器中获取调用栈信息

两种方式，一种是断点调试，这种很简单，我们日常开发中都用过。

一种是 console.trace()
```js
function sum(){
  return add()
}
function add() {
  console.trace()
  return 1
}

// 函数调用
sum()
```
五、JS 内存机制：栈（基本类型、引言类型地址）与堆（引用类型数据）

在 JavaScript 开发日常中，前端人员很少有机会了解内存，但如果你想成为前端的专家，打造高性能的前端应用，你就需要了解这一块，同时它也是面试的常见考察点。

JavaScript 中的内存空间主要分为三种类型：

* 代码空间：主要用来存放可执行代码
* 栈空间：调用栈的存储空间就是栈空间。
* 堆空间

代码空间主要用来存放可执行代码的。栈空间及堆空间主要用来存放数据的。接下来我们主要介绍栈空间及堆空间。

JavaScript 中的变量类型有 8 种，可分为两种：基本类型、引用类型。

基本类型：

* undefined
* null
* boolean
* number
* string
* bigint
* symbol

引用类型：

* object

其中，基本类型是保存在栈内存中的简单数据段，而引用类型保存在堆内存中。

1. 栈空间

基本类型在内存中占有固定大小的空间，所以它们的值保存在栈空间，我们通过 按值访问 。

一般栈空间不会很大。

2. 堆空间

引用类型，值大小不固定，但指向值的指针大小（内存地址）是固定的，所以把对象放入堆中，将对象的地址放入栈中，这样，在调用栈中切换上下文时，只需要将指针下移到上个执行上下文的地址就可以了，同时保证了栈空间不会很大。

当查询引用类型的变量时， 先从栈中读取内存地址， 然后再通过地址找到堆中的值。对于这种，我们把它叫做 按引用访问 。

一般堆内存空间很大，能存放很多数据，但它内存分配与回收都需要花费一定的时间。

基本类型（栈空间）与引用类型（堆空间）的存储方式决定了：基本类型赋值是值赋值，而引用类型赋值是地址赋值。


3. 垃圾回收

JavaScript 中的垃圾数据都是由垃圾回收器自动回收的，不需要手动释放。所以大部分的开发人员并不了解垃圾回收，但这部分也是前端进阶资深必备！

回收栈空间

在 JavaScript 执行代码时，主线程上会存在 ESP 指针，用来指向调用栈中当前正在执行的上下文,JavaScript 引擎通过向下移动 ESP 指针来销毁存放在栈空间中的执行上下文

回收堆空间

V8 中把堆分成新生代与老生代两个区域：

* 新生代：用来存放生存周期较短的小对象，一般只支持1～8M的容量
* 老生代：用来存放生存周期较长的对象或大对象

V8 对这两块使用了不同的回收器：

* 新生代使用副垃圾回收器
* 老生代使用主垃圾回收器

其实无论哪种垃圾回收器，都采用了同样的流程（三步走）：

* 标记： 标记堆空间中的活动对象（正在使用）与非活动对象（可回收）
* 垃圾清理： 回收非活动对象所占用的内存空间
* 内存整理： 当进行频繁的垃圾回收时，内存中可能存在大量不连续的内存碎片，当需要分配一个需要占用较大连续内存空间的对象时，可能存在内存不足的现象，所以，这时就需要整理这些内存碎片。

副垃圾回收器与主垃圾回收器虽然都采用同样的流程，但使用的回收策略与算法是不同的。

增量标记

V8 浏览器会自动执行垃圾回收，但由于 JavaScript 也是运行在主线程上的，一旦执行垃圾回收，就要打断 JavaScript 的运行，可能会或多或少的造成页面的卡顿，影响用户体验，所以 V8 决定采用增量 标记算法回收：

即把垃圾回收拆成一个个小任务，穿插在 JavaScript 中执行。

六、总结

本节从栈结构开始介绍，满足后进先出 (LIFO) 原则的有序集合，然后通过数组实现了一个栈。

接着介绍浏览器环境下 JavaScript 的异步执行机制，即事件循环机制， JavaScript 主线程不断的循环往复的从任务队列中读取任务（异步事件回调），放入调用栈中执行。调用栈又称执行上下文栈（执行栈），是用来管理函数执行上下文的栈结构。

JavaScript 的存储机制分为代码空间、栈空间以及堆空间，代码空间用于存放可执行代码，栈空间用于存放基本类型数据和引用类型地址，堆空间用于存放引用类型数据，当调用栈中执行完成一个执行上下文时，需要进行垃圾回收该上下文以及相关数据空间，存放在栈空间上的数据通过 ESP 指针来回收，存放在堆空间的数据通过副垃圾回收器（新生代）与主垃圾回收器（老生代）来回收。

聊聊就跑远了🤦‍♀️，但都是前端进阶必会，接下来我们开始刷栈题目吧！！！每日一刷，进阶前端与算法⛽️⛽️⛽️，来道简单的吧！

七、字节&leetcode155：最小栈（包含getMin函数的栈）
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。
示例:
```js
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```
