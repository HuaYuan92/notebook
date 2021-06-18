module.exports = {
  base: '/notebook/',
  title: 'NoteBook',
  description: 'my notebook --xy',
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Algorithm', link: '/algorithm/'},
      {text: 'Browser', link: '/browser/'},
      {text: 'Vue', link: '/vue/'},
      {text: 'JS', link: '/javascript/'},
      {text: 'CSS', link: '/css/'},
      {text: 'Network', link: '/network/'},
      {text: '工程化', link: '/tools/'},
      {text: '其他', link: '/others/'},
      {text: 'Github', link: 'https://github.com/HuaYuan92/notebook'},
    ],
    sidebar: {
      '/algorithm/': [
        ['one', '一 如何分析、统计算法的执行效率和资源消耗'],
        ['two', '二 从Chrome V8源码看JavaScript数组'],
        ['three', '三 从浏览器缓存淘汰策略和Vue的keep-alive学习LRU算法'],
        ['four', '四 链表原来如此简单'],
        ['five', '五 全方位解读前端用到的栈结构（调用栈、堆、垃圾回收等）'],
        ['six', '六 一看就懂的队列及配套算法题'],
      ],
    },
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    displayAllHeaders: true
  },
  markdown: {
    lineNumbers: true
  }
}
