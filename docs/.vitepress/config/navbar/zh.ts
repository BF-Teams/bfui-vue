type NavItem = NavItemWithLink | NavItemWithChildren;

type NavItemWithLink = {
  text: string;
  link: string;
  activeMatch?: string;
};

interface NavItemWithChildren {
  text?: string;
  items: NavItemWithLink[];
  activeMatch?: string;
}

export const navbarZh: Array<NavItem> = [
  { text: '指南', link: '/zh/guide/' },
  { text: '组件', link: '/zh/components/' },
  { text: '参与贡献', link: '/zh/contribution/' },
  {
    text: '相关链接',
    items: [
      { text: '博客动态', link: 'https://blog.meta-code.top/tags/BFUI/' },
      { text: '交流社区', link: 'https://github.com/Barry-Flynn/' },
    ],
  },
];
