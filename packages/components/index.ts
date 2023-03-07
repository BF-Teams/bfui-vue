import type { App } from 'vue';
import BfButton from './button';
import BfIcon from './icon';
import BfSelect from './select';
import BfOverlay from './overlay';
import BfDialog from './dialog';

const components = [BfButton, BfIcon, BfSelect, BfOverlay, BfDialog];
const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item);
  });
};

export { BfButton, BfIcon, BfSelect, BfOverlay, BfDialog };

export default {
  install,
};
