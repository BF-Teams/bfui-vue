import type { App } from 'vue';
import BfCol from './src/col.vue';

BfCol.install = (app: App) => {
  app.component(BfCol.name, BfCol);
};

export default BfCol;
