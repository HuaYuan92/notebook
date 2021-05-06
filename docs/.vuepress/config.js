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
      { text: '算法', link: '/algorithm/' },
      { text: 'vue', link: '/vue/' },
      { text: 'github', link: 'https://github.com/HuaYuan92/notebook' },
    ],
    sidebar: 'auto',
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    displayAllHeaders: true
  },
}
