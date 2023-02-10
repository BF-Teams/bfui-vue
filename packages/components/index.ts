import type { App } from 'vue';
import BfButton from './button';
import Icon from './icon';

const components = [BfButton, Icon];
const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item);
  });
};

export { BfButton, Icon };

export default {
  install,
};
