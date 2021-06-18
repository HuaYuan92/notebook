# 四 链表原来如此简单
[github](https://github.com/sisterAn/JavaScript-Algorithms/issues/12)

链表相对于数组来说，要复杂的多，首先，链表不需要连续的内存空间，它是由一组零散的内存块透过指针连接而成，所以，每一个块中必须包含当前节点内容以及后继指针。最常见的链表类型有单链表、双链表以及循环链表。

确定解题的数据结构：单链表、双链表或循环链表等
确定解题思路：如何解决问题
画图实现：画图可以帮助我们发现思维中的漏洞（一些思路不周的情况）
确定边界条件：思考解题中是否有边界问题以及如何解决
代码实现：解题完成
本文会给常用链表（单链表、双链表以及循环链表）的基本操作已经代码实现，并给出实现思路，这些都是链表解题的基石。

## 一、单链表

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
## 二、双链表

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
## 三、循环单链表/循环双链表
![循环链表](https://camo.githubusercontent.com/c44b1fda0edbd1e1ad68652afe58b42abe277dc0/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3237333530362f313538343139343133323631352d30333861333633632d326338362d343463382d623539612d3133336464353166656337322e706e67)
循环双链表和双链表不同的是：

循环双链表的 tail.next（ tail 的后继指针） 为 null ，循环双链表的 tail.next 为 head
循环双链表的 head.prev（ head 的前驱指针） 为 null ，循环双链表的 head.prev 为 tail

[将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。](https://github.com/sisterAn/JavaScript-Algorithms/issues/11)

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
