import type { App } from 'vue';
import BfButton from './src/button.vue';

BfButton.install = (app: App) => {
  app.component(BfButton.name, BfButton);
};

export default BfButton;
