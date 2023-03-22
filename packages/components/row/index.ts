import type { App } from 'vue';
import BfRow from './src/row.vue';

BfRow.install = (app: App) => {
  app.component(BfRow.name, BfRow);
};

export default BfRow;
