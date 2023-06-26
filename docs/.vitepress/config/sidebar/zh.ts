export type Sidebar = SidebarItem[] | SidebarMulti;

export interface SidebarMulti {
  [path: string]: SidebarItem[];
}

export type SidebarItem = {
  text?: string;
  link?: string;
  items?: SidebarItem[];
  /**
   * 如果未指定，则组不可折叠。
   *
   * 如果为“true”，则默认情况下组是可折叠的
   *
   * 如果“false”，则组可折叠，但默认情况下会展开
   */
  collapsed?: boolean;
};

export const sidebarZh: SidebarMulti = {
  '/zh/guide/': [
    {
      text: '指南',
      items: [
        { text: '项目简介', link: '/zh/guide/' },
        { text: '安装', link: '/zh/guide/installation'},
        { text: '快速上手', link: '/zh/guide/quickstart' },
        { text: '主题切换', link: '/zh/guide/switch-theme'},
        { text: '国际化', link: '/zh/guide/i18n' },
        { text: '常见问题', link: '/zh/guide/faq' },
        { text: '更新日志', link: '/zh/guide/changelog' },
      ],
    },
  ],
  '/zh/components/': [
    {
      text: '组件总览',
      link: '/zh/components/',
      items: [
        {
          text: '通用型',
          collapsed: false,
          items: [
            { text: 'Button 按钮', link: '/zh/components/button/' },
            { text: 'Icon 图标', link: '/zh/components/icon/' },
          ],
        },
        {
          text: '布局型',
          collapsed: false,
          items: [
            { text: 'Grid 栅格', link: '/zh/components/grid/' },
          ],
        },
        { text: '导航型', collapsed: false },
        {
          text: '数据录入型',
          collapsed: false,
          items: [{ text: 'Select 选择器', link: '/zh/components/select/' }],
        },
        { text: '数据展示型', collapsed: false },
        {
          text: '反馈型',
          collapsed: false,
          items: [
            { text: 'Overlay 遮罩层', link: '/zh/components/overlay/' },
            { text: 'Dialog 对话框', link: '/zh/components/dialog/' },
          ],
        },
        { text: '其他组件', collapsed: false },
      ],
    },
  ],
  '/zh/contribution/': [
    {
      text: '贡献指南',
      link: '/zh/contribution/',
      items: [
        {
          text: '组件设计',
          collapsed: false,
          items: [
            { text: 'Values 价值观', link: '/zh/contribution/design/values/' },
            { text: 'Color 色彩', link: '/zh/contribution/design/color/' },
            { text: 'Layout 布局', link: '/zh/contribution/design/layout/' },
            { text: 'Fonts 字体', link: '/zh/contribution/design/fonts/' },
            { text: 'Motion 动效', link: '/zh/contribution/design/motion/' },
          ],
        },
        {
          text: '组件开发',
          collapsed: false,
          items: [{ text: '开发流程', link: '/zh/contribution/develop/' }],
        },
        {
          text: '团队成员',
          link: '/zh/contribution/team/',
        },
      ],
    },
  ],
};
