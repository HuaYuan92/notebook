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
      {text: 'Algorithm', link: '/algorithm/one'},
      {text: 'Browser', link: '/browser/one'},
      {text: 'Vue', link: '/vue/one'},
      {text: 'JS', link: '/javascript/'},
      {text: 'CSS', link: '/css/'},
      {text: 'Network', link: '/network/one'},
      {text: '工程化', link: '/tools/one'},
      {text: '其他', link: '/others/'},
      {text: 'Github', link: 'https://github.com/HuaYuan92/notebook'},
    ],
    sidebar: {
      '/algorithm/': [
        ['one', '复杂度'],
        ['two', '数组'],
        ['three', 'LRU算法'],
        ['four', '链表'],
        ['five', '栈、堆、垃圾回收）'],
        ['six', '队列'],
      ],
      '/browser/': [
        ['one', '缓存'],
        ['two', 'Web Components']
      ],
      '/network/': [
        ['one', '网络']
      ],
      '/vue/': [
        ['one', '基础'],
        ['two', '探秘nextTick']
      ],
      '/tools/': [
        ['one', '前端监控'],
        ['two', '其他']
      ]
    },
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    displayAllHeaders: true
  },
  markdown: {
    lineNumbers: true
  }
}
