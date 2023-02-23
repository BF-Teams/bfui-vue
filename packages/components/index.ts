import type { App } from 'vue';
import BfButton from './button';
import BfIcon from './icon';
import BfSelector from './Selector';

const components = [BfButton, BfIcon, BfSelector];
const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item);
  });
};

export { BfButton, BfIcon, BfSelector };

export default {
  install,
};
