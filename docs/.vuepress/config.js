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
      { text: 'Guide', link: '/guide/' },
      { text: 'github', link: 'https://github.com/HuaYuan92/notebook' },
    ]
  }
}
