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
      text: '开始',
      items: [
        { text: '什么是 BFUI？', link: './index' },
        { text: '安装方式', link: './installation' },
        { text: '快速上手', link: './getting-started' },
        { text: '国际化', link: './i18n' },
        { text: '常见问题', link: './faq' },
        { text: '更新日志', link: './changelog' },
      ],
    },
  ],
  '/zh/components/': [
    {
      text: '组件总览',
      link: '/zh/components/index',
      items: [
        {
          text: '通用型',
          collapsed: false,
          items: [
            { text: 'Button 按钮', link: '/zh/components/button/index' },
            { text: 'Icon 图标', link: '/zh/components/icon/index' },
          ],
        },
        { text: '布局型', collapsed: false },
        { text: '导航型', collapsed: false },
        {
          text: '数据录入型',
          collapsed: false,
          items: [
            { text: 'Select 选择器', link: '/zh/components/select/index' },
          ],
        },
        { text: '数据展示型', collapsed: false },
        { text: '反馈型', collapsed: false },
        { text: '其他组件', collapsed: false },
      ],
    },
  ],
  '/zh/contribution/': [
    {
      text: '贡献指南',
      items: [
        { text: '开发团队', link: './index' },
        { text: '组件设计', link: './design' },
        { text: '参与开发', link: './develop' },
      ],
    },
  ],
};
