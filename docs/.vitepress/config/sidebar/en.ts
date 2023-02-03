export type Sidebar = SidebarItem[] | SidebarMulti

export interface SidebarMulti {
  [path: string]: SidebarItem[]
}

export type SidebarItem = {
  text?: string
  link?: string
  items?: SidebarItem[]
  /**
   * If not specified, group is not collapsible.
   *
   * If `true`, group is collapsible and collapsed by default
   *
   * If `false`, group is collapsible but expanded by default
   */
  collapsed?: boolean
}

export const sidebarEn: SidebarMulti = {
  '/en/guide/': [
    {
      text: 'Start',
      items: [
        { text: '项目简介', link: './index' },
        { text: '安装方式', link: './installation' },
        { text: '快速上手', link: './getting-started' },
        { text: '国际化', link: './i18n' },
        { text: '常见问题', link: './faq' },
        { text: '更新日志', link: './changelog' },
      ],
    },
  ],
  '/en/components/': [
    {
      text: 'Overview',
      link: './index',
      items: [
        {
          text: 'General',
          collapsed: false,
          items: [
            { text: 'Button 按钮', link: './button' },
            { text: 'Icon 图标', link: './icon' },
          ],
        },
        { text: 'Layout', collapsed: false },
        { text: 'Navigation', collapsed: false },
        { text: 'Data Entry', collapsed: false },
        { text: 'Data Display', collapsed: false },
        { text: 'Feedback', collapsed: false },
        { text: 'Other', collapsed: false },
      ],
    },
  ],
};
