import type { App } from 'vue';
import BfButton from './button';
import BFIcon from './icon';

const components = [BfButton, BFIcon];
const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item);
  });
};

export { BfButton, BFIcon };

export default {
  install,
};
