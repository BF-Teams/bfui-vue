import type { App } from 'vue';
import BfButton from './button';
import BfIcon from './icon';

const components = [BfButton, BfIcon];
const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item);
  });
};

export { BfButton, BfIcon };

export default {
  install,
};
