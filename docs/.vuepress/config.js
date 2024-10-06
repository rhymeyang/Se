import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  base: '/se/',
  theme: defaultTheme({
    logo: '/se/images/logo.png',
    navbar: false,
    sidebar: {
      '/': [
        {
          text: 'Main Pages',
          children: [
            { text: "Basic", link: '/' },
          ],
        },
        {
          text: 'CYB306 Cyber-Physical Vehicle System Security',
          collapsable: true,
          children: [
            { text: "Week01", link: '/306/Week01.md' },
            { text: "Week02", link: '/306/Week02.md' },
            { text: "Week03", link: '/306/Week03.md' },
            { text: "Week04", link: '/306/Week04.md' },
            { text: "Week05", link: '/306/Week05.md' },
          ],
        },
      ]
    },
  }),
  lang: 'zh-CN',
  title: "Vivian's Page",
  description: 'Vivian',
})


