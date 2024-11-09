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
            { text: "General", link: '/com/general.md' },
            { text: "Block Chain", link: '/com/BlockChain.md' },
          ],
        },
        {
          text: 'CYB300 Automobility Cybersecurity Engineering Standards',
          collapsable: true,
          children: [
            { text: "Schedule", link: '/300/00_index.md' },
            { text: "Tara PPT", link: '/300/01_Tara.md' },
            { text: "MidTerm Notes", link: '/300/01_Notes.md' },
            { text: "Questions", link: '/300/question.md' },
          ],
        },
        {
          text: 'ISO 21434',
          collapsable: true,
          children: [
            { text: "Introduction", link: '/iso/i21434/01_introduction.md' },
            { text: "Forward", link: '/iso/i21434/02_forward.md' },
            { text: "Introduction", link: '/iso/i21434/03_introduction.md' },
            { text: "Content", link: '/iso/i21434/04_content.md' },
          ],
        },
        {
          text: 'CYB302 Automobility Cybersecurity',
          collapsable: true,
          children: [
            { text: "Week 01", link: '/302/Week01.md' },
            { text: "Week 02", link: '/302/Week02.md' },
            { text: "Week 03", link: '/302/Week03.md' },
            { text: "Week 04", link: '/302/Week04.md' },
            { text: "Chapter 5 - AUTOSAR Embedded Security in Vehicles", link: '/302/Week05.md' },
            { text: "Week 06", link: '/302/Week06.md' },
            { text: "Week 07", link: '/302/Week07.md' },
            { text: "How to Write", link: '/302/Writing.md' },
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
            { text: "Unit 2 Scheduling 2", link: '/304/202_Scheduling.md' },
            { text: "Unit 2 Trends", link: '/304/203_Trends.md' },
            { text: "Unit 2 Risk", link: '/304/204_Risk.md' },
            { text: "Unit 2 Project Monitoring & Controlling", link: '/304/205_Monitoring.md' },
            
          ],
        },
        {
          text: 'Project Manager',
          collapsable: false,
          children: [
            { text: "Resource", link: '/pm/00.md' },
            { text: "Gantt Charts", link: '/pm/00_gantt.md' },
            { text: "Intrduction", link: '/pm/01_Introduction.md' },
            { text: "First Things", link: '/pm/02_FirstThings.md' },
            { text: "Project Plan", link: '/pm/03_ProjectPlan.md' },
            { text: "Project Schedule", link: '/pm/04_ProjectSchedule.md' },
            { text: "Agile", link: '/pm/05_Agile.md' },
            { text: "Resource", link: '/pm/00.md' },
          ],
        },
        {
          text: 'CYB306 Cyber-Physical Vehicle System Security',
          collapsable: false,
          children: [
            { text: "Week01", link: '/306/Week01.md' },
            { text: "Week02", link: '/306/Week02.md' },
            { text: "Week03", link: '/306/Week03.md' },
            { text: "Week04", link: '/306/Week04.md' },
            { text: "Week05", link: '/306/Week05.md' },
            { text: "Chapter 6 - Infrastructure for Transportation Cyber-Physical Systems", link: '/306/Week06.md' },
            { text: "Chapter 7", link: '/306/Week07.md' },
            { text: "Case 3", link: '/306/Case3.md' },
          ],
        },
        {
          text: 'CYB308 Cybersecurity System Audits',
          collapsable: false,
          children: [
            { text: "Week 01", link: '/308/Week01.md' },
            { text: "Week 02", link: '/308/Week02.md' },
            { text: "Week 03", link: '/308/Week03.md' },
            { text: "Week 04", link: '/308/Week04.md' },
            { text: "Week 05", link: '/308/Week05.md' },
            { text: "Chapter 4", link: '/308/Week09.md' },
          ],
        },
        {
          text: 'CYB308 TextBook',
          collapsable: true,
          children: [
            { text: "CHAPTER 1 Becoming a CISA", link: '/308B/Chapter01.md' },
            { text: "CHAPTER 2 IT Governance and Management", link: '/308B/Chapter02.md' },
            { text: "CHAPTER 3 The Audit Process", link: '/308B/Chapter03.md' },
            { text: "CHAPTER 4 IT Life Cycle Management", link: '/308B/Chapter04.md' },
            { text: "Input Controls", link: '/308B/InputControls.md' },
            { text: "CHAPTER 5 IT Service Management and Continuity", link: '/308B/Chapter05.md' },
            { text: "Business Resilience", link: '/308B/BusinessResilience.md' },
            { text: "CHAPTER 6 Information Asset Protection", link: '/308B/Chapter06.md' },
            { text: "Encryption", link: '/308B/Encryption.md' },
            { text: "Appendix A", link: '/308B/AppendixA.md' },
            { text: "Appendix B", link: '/308B/AppendixB.md' },
            { text: "Appendix C", link: '/308B/AppendixC.md' },
          ],
        },
      ]
    },
  }),
  lang: 'zh-CN',
  title: "Vicky's Page",
  description: "Vicky's Notes",
})


