import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import BFUI from '@bf-teams/bfui-vue'; // 全局引入BFUI
import '@bf-teams/bfui-vue'; // 全局引入BFUI组件
import '@bf-teams/bfui-vue/theme'; // 全局引入BFUI主题

import './assets/main.css';

const app = createApp(App);

app.use(router);
// app.use(BFUI); // 全局安装BFUI

app.mount('#app');
