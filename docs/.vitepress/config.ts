import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import Inspect from 'vite-plugin-inspect'
export default defineConfig({
    lang: 'zh-CN',
    title: '碎时光',
    titleTemplate: '过去和未来',
    head: [['link', { rel: 'icon', href: '/large.svg' }]],
    // 暗黑模式开关
    appearance: true,
    themeConfig: {
        siteTitle: 'zyh|zmy',
        logo: '/large.svg',
        nav: [
            { text: '旅程', link: '/guide' },
            {
              text: 'Dropdown Menu',
              items: [
                { text: 'Item A', link: '/item-1' },
                { text: 'Item B', link: '/item-2' },
                { text: 'Item C', link: '/item-3' }
              ]
            }
          ],
          sidebar: [
            {
              text: 'Guide',
              collapsible:true,
              collapsed:false,
              items: [
                { text: 'Introduction', link: '/introduction'},
                { text: 'Getting Started', link: '/getting-started' },
              ]
            },
            {
              text: 'Section Title B',
              items: [
                { text: 'Item C', link: '/item-c' },
                { text: 'Item D', link: '/item-d' },
              ]
            }
          ],
          outlineTitle: 'In hac pagina',
          socialLinks: [
            { icon: 'github', link: 'https://github.com/yuhaozhai' },
          ],
          // footer: {
          //   message: 'Released under the MIT License.',
          //   copyright: 'Copyright © 2019-present Evan You'
          // }
          // editLink: {
          //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
          // }
   },
   vite: {
     plugins: [
       Inspect({
         enabled: false
       }),
       Unocss({
         mode: 'per-module'
       })
     ]
   }
})
  