import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  base: '/Se/',
  theme: defaultTheme({
    logo: '/Se/images/logo.png',
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
          text: 'CYB300 Automobility Cybersecurity Engineering Standards',
          collapsable: true,
          children: [

            { text: "Schedule", link: '/300/00_index.md' },
            { text: "Tara PPT", link: '/300/01_Tara.md' },
          ],
        },
        {
          text: 'CYB304 Project Management For Cybersecurity In Automobility ',
          collapsable: true,
          children: [
            { text: "Unit 1 Introduction", link: '/304/101_Introduction.md' },
            { text: "Unit 1 Frameworks", link: '/304/102_Frameworks.md' },
            { text: "Unit 1 Methodologies", link: '/304/103_Methodologies.md' },
            { text: "Unit 1 Standards", link: '/304/104_Standards.md' },
            { text: "Unit 1 Reqirements", link: '/304/105_Reqirements.md' },
            { text: "Unit 2 Scheduling", link: '/304/201_Scheduling.md' },
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
        {
          text: 'CYB308 Cybersecurity System Audits',
          collapsable: true,
          children: [
            { text: "Week 04", link: '/308/Week04.md' },
            { text: "Week 05", link: '/308/Week05.md' },
          ],
        },
      ]
    },
  }),
  lang: 'zh-CN',
  title: "Vivian's Page",
  description: 'Vivian',
})


