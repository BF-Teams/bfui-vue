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

export const navbarEn: Array<NavItem> = [
  { text: 'Guide', link: '/en/guide/' },
  { text: 'Components', link: '/en/components/' },
  { text: 'Contribution', link: '/en/contribution/' },
  {
    text: 'Links',
    items: [
      { text: 'Blog and News', link: 'https://blog.meta-code.top/tags/BFUI/' },
      { text: 'Community', link: 'https://github.com/Barry-Flynn/' },
    ],
  },
];
