module.exports = {
  base: '/notebook/',
  title:'NoteBook',
  description: 'my notebook --xy',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Algorithm', link: '/algorithm/' },
      { text: 'Browser', link: '/browser/' },
      { text: 'Vue', link: '/vue/' },
      { text: 'JS', link: '/javascript/' },
      { text: 'CSS', link: '/css/' },
      { text: 'Network', link: '/network/' },
      { text: '工程化', link: '/tools/' },
      { text: '其他', link: '/others/' },
      { text: 'Github', link: 'https://github.com/HuaYuan92/notebook' },
    ],
    sidebar: 'auto',
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    displayAllHeaders: true
  },
}
