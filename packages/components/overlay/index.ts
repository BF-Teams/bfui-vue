import type { App } from 'vue';
import BfOverlay from './src/overlay.vue';

BfOverlay.install = (app: App) => {
  app.component(BfOverlay.name, BfOverlay);
};

export default BfOverlay;
