type HeadConfig = [string, Record<string, string>] | [string, Record<string, string>, string] | any;

export const headConfig: HeadConfig = [
  [
    'link',
    {
      rel: 'shortcut icon',
      href: '/bfui-vue/images/icons/favicon.ico',
    },
  ],
  [
    'link',
    {
      rel: 'manifest',
      href: '/bfui-vue/manifest.json',
    },
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/bfui-vue/images/icons/apple-touch-icon.png',
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/bfui-vue/images/icons/favicon-32x32.png',
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/bfui-vue/images/icons/favicon-16x16.png',
    },
  ],
  [
    'link',
    {
      rel: 'mask-icon',
      href: '/bfui-vue/images/icons/safari-pinned-tab.svg',
      color: '#0d3eed',
    },
  ],
  [
    'meta',
    {
      name: 'msapplication-config',
      content: '/bfui-vue/images/icons/browserconfig.xml',
    },
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
  ['meta', { name: 'theme-color', content: '#ffffff' }],
  [
    'script',
    { type: 'text/javascript', src: 'https://at.alicdn.com/t/c/font_3916221_f50b332j0yl.js' },
  ],
];
