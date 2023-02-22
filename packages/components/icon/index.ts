import type { App } from 'vue';
import BfIcon from './src/icon.vue';

BfIcon.install = (app: App) => {
  app.component(BfIcon.name, BfIcon);
};

export default BfIcon;
