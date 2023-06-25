import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import BFUI from '@bf-teams/bfui-vue'; // 完整导入BFUI
import '@bf-teams/bfui-vue/theme'; // 完整导入BFUI主题

import { IconPark as BfIcon } from '@icon-park/vue-next/es/all'; // 引入Icon组件
import '@icon-park/vue-next/styles/index.css'; // 引入IconPark图标库样式

import './assets/main.css';

const app = createApp(App);

app.use(router);
app.use(BFUI); // 全局注册BFUI
app.component('bf-icon', BfIcon); // 全局注册Icon组件

app.mount('#app');
