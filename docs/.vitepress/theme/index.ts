import DefaultTheme from 'vitepress/theme'
import './custom.css'

import BFUI from '@bf-teams/bfui-vue'; // 全局引入BFUI
import '@bf-teams/bfui-vue/theme'; // 全局引入BFUI主题

// export default DefaultTheme
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(BFUI); // 全局安装BFUI
  }
}
