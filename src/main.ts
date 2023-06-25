import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import BFUI from '@bf-teams/bfui-vue'; // 完整导入BFUI
import '@bf-teams/bfui-vue/theme'; // 完整导入BFUI主题

import './assets/main.css';

const app = createApp(App);

app.use(router);
app.use(BFUI); // 全局注册BFUI

app.mount('#app');
