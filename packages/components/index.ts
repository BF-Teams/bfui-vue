import type { App } from 'vue';
import BfButton from './button';
import BfIcon from './icon';
import BfSelect from './select';
import BfDialog from './dialog';

const components = [BfButton, BfIcon, BfSelect, BfDialog];
const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item);
  });
};

export { BfButton, BfIcon, BfSelect, BfDialog };

export default {
  install,
};
