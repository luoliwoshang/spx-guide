/*
 * @Author: Zhang Zhi Yang
 * @Date: 2024-01-04 11:05:40
 * @LastEditors: Zhang Zhi Yang
 * @LastEditTime: 2024-01-23 16:32:35
 * @FilePath: /workspace/spx-doc-v2/docs/.vuepress/config.ts
 * @Description: 
 */
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
            text: '起步',
            children:[{
              text:"基础概念",
              link:"/guide/basic-concept/"
            }]
          },
        ],
      },


    ],

    sidebar: [
      // SidebarItem
      {
        text: '指南',
        children:[{
          text:"基础概念",
          link:"/guide/basic-concept/"
        }]
      },
  
    ],
    sidebarDepth:4
  }),
  plugins: [

  ],
}