import type { App } from 'vue';
import BfIcons from './src/icon.vue';

BfIcons.install = (app: App) => {
  app.component(BfIcons.name, BfIcons);
};

export default BfIcons;
