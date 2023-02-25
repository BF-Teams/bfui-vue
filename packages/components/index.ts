import type { App } from 'vue';
import BfButton from './button';
import BfIcon from './icon';
import BfSelect from './select';

const components = [BfButton, BfIcon, BfSelect];
const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item);
  });
};

export { BfButton, BfIcon, BfSelect };

export default {
  install,
};
