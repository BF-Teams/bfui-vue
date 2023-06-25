import DefaultTheme from 'vitepress/theme'
import './custom.css'

import BFUI from '@bf-teams/bfui-vue'; // 全局引入BFUI
import '@bf-teams/bfui-vue/theme'; // 全局引入BFUI主题

import { IconPark as BfIcon } from '@icon-park/vue-next/es/all'; // 引入IconPark组件
import '@icon-park/vue-next/styles/index.css'; // 引入IconPark图标库样式

// export default DefaultTheme
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(BFUI); // 全局注册BFUI
    app.component('bf-icon', BfIcon); // 全局注册Icon组件
  }
}
