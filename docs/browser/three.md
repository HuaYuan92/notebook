## 一、什么是Web Components

MDN中对于Web Components的定义是这样的：Web Components 是一套不同的技术，允许您创建可重用的定制元素（它们的功能封装在您的代码之外）并且在您的 web 应用中使用它们。
通俗来说呢，Web Components 是一个浏览器原生支持的组件化方案，允许你创建新的自定义、可封装、可重用的HTML 标记。不用加载任何外部模块，直接就可以在浏览器中跑。

作为开发者来说，我们一直致力于尽可能的代码复用，但是这并不是一件容易的事情，比如我们抽离出的vue组件，可能并不适用于react项目，又或者组件受到了全局样式的影响，丢失了原有的UI样式，让页面样式变得极其糟糕，调试这些样式，即费心又费力。

Web Components就是旨在解决这些问题，它由三项主要技术组成，它们可以一起使用来创建封装功能的定制元素，可以在你喜欢的任何地方重用，不必担心代码冲突。

接下来，我们开始介绍Web Components的三项技术，看它们是如何使用的，是如何解决以上问题的。

## 二、Custom elements

Custom elements（自定义元素）：一组 JavaScript API，允许您定义 custom elements 及其行为，然后可以在您的用户界面中按照需要使用它们。

话不多说，上代码吧。

```html
<style>
  body #container {
    color: #fff;
  }
</style>
<div>
  <!--使用自定义标签-->
  <user-card></user-card>
  <user-card></user-card>
</div>

<script>
  //  定义组件类
  class UserCard extends HTMLElement {
    constructor () {
      super();
      const elm = document.createElement('div');
      elm.textContent = 'Hello world';
      elm.id = 'container';
      elm.onclick = function () {
        console.log('Custom elements')
      }
      const style = document.createElement('style');
      style.textContent = `
        body {
          background: red;
        }
        #container {
          color: blue
        }
      `
      this.append(elm, style)
    }
  }
  // 注册组件
  customElements.define('user-card', UserCard);
</script>
```

各位看官可以把以上代码可复制到html文件中，看下对应的效果。 大致效果如下：

![image](https://static0.xesimg.com/bcc-tcc/2022080802.png)

看完效果之后呢，我们再来详解下代码中提到的新知识。

###  custom elements分类
```html
class UserCard extends HTMLElement{}
```
这是custom elements的第一种：Autonomous custom elements，它是独立的元素，它不继承其他内建的 HTML 元素。你可以直接把它们写成 HTML 标签的形式，来在页面上使用，例如上面的`<user-card></user-card>`

另一种是Customized built-in elements，继承自基本的 HTML 元素。在创建时，你必须指定所需扩展的元素（正如上面例子所示），使用时，需要先写出基本的元素标签，并通过 is 属性指定 custom element 的名称。例如 `<div is="user-card">`, 或者 `document.createElement("div", { is: "user-card" })`。


## 三、Shadow DOM

以上的例子，虽然也是实现了基本的功能，但是我们很容易发现它存在两个问题：

* 主文档中设置的字体颜色覆盖了组件中的字体颜色，组件中设置的body背景色会影响全局，组件和主文档样式相互影响。
* 组件DOM没有隔离，主动获取container元素时，会获取到两个ID为container的元素。

Shadow Dom就是用来解决以上两个问题的，这也是 Web components 的一个重要属性是——封装，可以将标记结构、样式和行为隐藏起来，并与页面上的其他代码相隔离，保证不同的部分不会混在一起，可使代码更加干净、整洁。Shadow DOM 接口是封装属性的关键所在，它可以将一个隐藏的、独立的 DOM 附加到一个元素上。

好了，上代码吧。

```html
<style>
  body #container {
    color: #fff;
  }
</style>
<div>
  <!--使用自定义标签-->
  <user-card></user-card>
  <user-card></user-card>
</div>

<script>
  //  定义组件类
  class UserCard extends HTMLElement {
    constructor () {
      super();
      const elm = document.createElement('div');
      elm.textContent = 'Hello world';
      elm.id = 'container';
      elm.onclick = function () {
        console.log('Custom elements')
      }
      const style = document.createElement('style');
      style.textContent = `
        body {
          background: red;
        }
        #container {
          color: blue
        }
      `
      const shadow = this.attachShadow({mode: 'open'});
      shadow.appendChild(elm);
      shadow.appendChild(style);
    }
  }
  // 注册组件
  customElements.define('user-card', UserCard);
</script>
```

效果如下：
![image](https://static0.xesimg.com/bcc-tcc/2022080803.png)
像这样，Shadow DOM实现了DOM隔离和样式隔离。Shadow DOM 允许在文档（Document）渲染时插入一棵 子 DOM 树，并且这棵子树不在 主 DOM 树中，同时为子树中的 DOM 元素和 CSS 提供了封装的能力。Shadow DOM 使得子树 DOM 与主文档的 DOM 保持分离，子 DOM 树中的 样式 不会影响到主 DOM 树的内容

## 四、templates and slots

像上文的例子中，我们创建元素都是直接使用JS创建，如
```html
const elm = document.createElement('div');
```
如果只是创建一两个简单的DOM还好，如果组件中的元素数量比较多，这就比较头疼了，而且使用JS堆叠创建DOM也不美观，那有没有其他更好的方式呢？

有的。这就是templates and slots，Web Components提供了类似vue的template模板功能，甚至提供了类似的slots功能，更方便我们复用代码。

惯例，上代码吧，上面代码太简单，用不到templates，我们换个稍微复杂点的

```html
<style>
  .container {
    background: red;
  }
</style>
<user-card></user-card>
<script >
  class UserCard extends HTMLElement {
    constructor() {
      super();

      const wrapper = document.createElement('div')
      wrapper.setAttribute('class', 'wrapper')

      var container = document.createElement('div');
      container.classList.add('container');

      var image = document.createElement('img');
      image.src = 'https://semantic-ui.com/images/avatar2/large/kristy.png';
      image.classList.add('image');

      var name = document.createElement('p');
      name.classList.add('name');
      name.innerText = 'xuyan';

      var email = document.createElement('p');
      email.classList.add('email');
      email.innerText = 'xuyan28@tal.com';

      var button = document.createElement('button');
      button.classList.add('button');
      button.innerText = '关注';
      button.onclick = function () { alert("关注成功") }

      const style = document.createElement('style');
      style.textContent = `
     .wrapper {
       display: flex;
     }
     .container {
       margin-left: 10px;
     }
     img {
       width: 150px;
     }
    `
      container.append(name, email, button, style);
      wrapper.append(image, container)
      this.append(wrapper);
    }
  }
  customElements.define('user-card', UserCard)
</script>
```
效果如下：
![image](https://static0.xesimg.com/bcc-tcc/2022080805.png)

你看，当组件稍微复杂点的时候，代码看上去就令人难以接受，让人忍不住想改写一番，想做就做，开始改吧。

先用Shadow DOM 实现 dom 和 样式的隔离

```js
const shadow = this.attachShadow({mode: 'open'});
 '...'
// this.append(wrapper);
shadow.appendChild(wrapper);
```
此时已经实现了隔离，效果如下：
![image](https://static0.xesimg.com/bcc-tcc/2022080806.png)

然后提取下模板：
```html
<style>
  .container {
    background: red;
  }
</style>
<user-card></user-card>

<template id="userCardTemplate">
  <style>
    .wrapper {
      display: flex;
    }

    .container {
      margin-left: 10px;
    }

    img {
      width: 150px;
    }
  </style>
  <script>
    function follow() {
      alert('关注成功')
    }
  </script>
  <div class="wrapper">
    <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" class="image">
    <div class="container">
      <p class="name">yong.cai</p>
      <p class="email">yong.cai@kapeixi.com</p>
      <button onclick="follow()">关注</button>
    </div>
  </div>
</template>
```
JS部分也需要改一下：
```js
class UserCard extends HTMLElement {
  constructor() {
    super();
    var shadow = this.attachShadow({'mode': 'open'})
    var templateElem = document.getElementById('userCardTemplate');
    var content = templateElem.content.cloneNode(true);
    shadow.append(content);
  }
}
customElements.define('user-card', UserCard)
```
这种写法，是不是看起来舒服多了，完美。

最后上slots大法：
```html
<style>
  .container {
    background: red;
  }
</style>
<user-card>
  <span slot="uName">yong.cai</span>
  <span slot="email">yong.cai@kapeixi.com</span>
</user-card>

<template id="userCardTemplate">
  <style>
    .wrapper {
      display: flex;
    }

    .container {
      margin-left: 10px;
    }

    img {
      width: 150px;
    }
  </style>
  <script>
    function follow() { alert("关注成功") }
  </script>
  <div class="wrapper">
    <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" class="image">
    <div class="container">
      <p class="name">
        <slot name="uName">占位</slot>
      </p>
      <p class="email">
        <slot name="email">占位</slot>
      </p>
      <button class="button" onclick="follow()">关注</button>
    </div>
  </div>
</template>
```
改写完成啦，效果是一样一样的，整体的代码却是顺眼了不少，可复用性和可维护性也上了一个新台阶。

## 总结
通过Web Components，我们可以自由封装组件，由于是原生的，所以我们就可以在Vue、React、angular等框架中使用，而且不需要引入任何依赖，不会对我们代码有任何入侵，具备了组件化的能力，能够隔离外界对组件内部 DOM 和 样式的影响（类似于 Vue 的 scoped），666。

但是呢，它也存在一些缺点：比如浏览器兼容性差，需要直接操作DOM，和外部CSS交互比较难。在项目中应用的时候，我们也该考虑项目的实际情况，决定是否选择Web Components。


### 参考文档
[MDN-Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)

[带你走进 Web Components 新世界](https://juejin.cn/post/7086682965371486216)

[深入理解Web Components](https://blog.csdn.net/qwe435541908/article/details/117133943)


