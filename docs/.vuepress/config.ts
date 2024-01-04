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
          {
            text: '个人随笔',
            children: ['/personal/game/', '/personal/pc/'],
          },
        ],
      },


    ],
  }),
  plugins: [

  ],
}