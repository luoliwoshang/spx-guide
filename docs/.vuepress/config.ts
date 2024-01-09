import { defaultTheme } from '@vuepress/theme-default'


export default {
  base:'/spx-guide/',
  theme: defaultTheme({
    logo: '/image/logo.svg',
    navbar: [
      { text: '首页', link: '/', },
      { text: '简介', link: '/intro/', },
      {
        text: '指南',
        children: [
          {
            text: '坐标体系',
            children:[{
              text:"精灵坐标",
              link:"/guide/coordinate/"
            }]
          },
        ],
      },


    ],

    sidebar: [
      // SidebarItem
      {
        text: '指南',
        children: [
          // SidebarItem
          // {
          //   text: 'github',
          //   link: 'https://github.com',
          //   children: [],
          // },
          // 字符串 - 页面文件路径
          {
            text: '坐标体系',
            children: [
              '/guide/coordinate.md',
            ],
          }
        ],
      },
  
    ],
    sidebarDepth:4
  }),
  plugins: [

  ],
}