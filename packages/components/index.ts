import type { App } from 'vue';
import Button from './button';
import Icon from './icon';

const components = [Button, Icon];
const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item);
  });
};

export { Button, Icon };

export default {
  install,
};
