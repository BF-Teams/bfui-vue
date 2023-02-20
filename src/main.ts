import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BFUI from '@bf-teams/bfui-vue'; // 全局引入BFUI

import './assets/main.css';
import '@bf-teams/bfui-vue/style'; // 引入BFUI全局样式

const app = createApp(App);

app.use(router);
app.use(BFUI); // 全局安装BFUI

app.mount('#app');
