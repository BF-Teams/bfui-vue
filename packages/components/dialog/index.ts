import type { App } from 'vue';
import BfDialog from './src/dialog.vue';

BfDialog.install = (app: App) => {
  app.component(BfDialog.name, BfDialog);
};

export default BfDialog;
