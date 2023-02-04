export type Sidebar = SidebarItem[] | SidebarMulti;

export interface SidebarMulti {
  [path: string]: SidebarItem[];
}

export type SidebarItem = {
  text?: string;
  link?: string;
  items?: SidebarItem[];
  /**
   * If not specified, group is not collapsible.
   *
   * If `true`, group is collapsible and collapsed by default
   *
   * If `false`, group is collapsible but expanded by default
   */
  collapsed?: boolean;
};

export const sidebarEn: SidebarMulti = {
  '/en/guide/': [
    {
      text: 'Start',
      items: [
        { text: 'What is BFUI?', link: './index' },
        { text: 'Installation', link: './installation' },
        { text: 'Getting Started', link: './getting-started' },
        { text: 'i18n', link: './i18n' },
        { text: 'FAQ', link: './faq' },
        { text: 'Changelog', link: './changelog' },
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
  '/en/contribution/': [
    {
      text: 'Contributing Guide',
      items: [
        { text: 'Team', link: './index' },
        { text: 'Design', link: './design' },
        { text: 'Develop', link: './develop' },
      ],
    },
  ],
};
