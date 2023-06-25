import type { App } from 'vue';
import BfButton from './button';
import BfIcons from './icon';
import BfRow from './row';
import BfCol from './col';
// import BfSelect from './select';
import BfOverlay from './overlay';
import BfDialog from './dialog';

const components = [BfButton, BfIcons, BfRow, BfCol, BfOverlay, BfDialog];
const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item);
  });
};

// 向外导出每一个组件，方便按需引入
export { BfButton, BfIcons, BfRow, BfCol, BfOverlay, BfDialog };

// 向外导出一个含有 install 方法的对象，方便全局安装
export default {
  install,
};
