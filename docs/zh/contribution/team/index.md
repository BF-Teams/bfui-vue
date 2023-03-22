<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/81922999?v=4',
    name: '张洪浩',
    title: 'Founder',
    org: 'BF-Teams',
    orgLink: 'https://github.com/BF-Teams/',
    desc: '技术架构、文档维护和组件开发',
    links: [
      { icon: 'github', link: 'https://github.com/Barry-Flynn' },
      { icon: 'mastodon', link: 'https://blog.meta-code.top/' },
      { icon: 'youtube', link: 'https://space.bilibili.com/349963315' },
    ],
    sponsor: 'https://blog.meta-code.top/Reward-list/',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/99073745?v=4',
    name: '张中秋',
    title: 'Developer',
    desc: '参与组件库的开发',
    links: [
      { icon: 'github', link: 'https://github.com/sleep-earily' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/80016783?v=4',
    name: '邱钧茂',
    title: 'Developer',
    desc: '参与组件库的开发',
    links: [
      { icon: 'github', link: 'https://github.com/Eternal-rr' },
    ]
  },
  // {
  //   avatar: 'https://avatars.githubusercontent.com/u/106507183?v=4',
  //   name: '张玉婷',
  //   title: 'Developer',
  //   desc: '参与组件库的开发',
  //   links: [
  //     { icon: 'github', link: 'https://github.com/99999521' },
  //   ]
  // },
  // {
  //   avatar: 'https://avatars.githubusercontent.com/u/111298893?v=4',
  //   name: '张宇晨',
  //   title: 'Developer',
  //   desc: '参与组件库的开发',
  //   links: [
  //     { icon: 'github', link: 'https://github.com/zychhh000' },
  //   ]
  // },
  // {
  //   avatar: 'https://avatars.githubusercontent.com/u/97940554?v=4',
  //   name: '解睿',
  //   title: 'Developer',
  //   desc: '参与组件库的开发',
  //   links: [
  //     { icon: 'github', link: 'https://github.com/sherry-thanks' },
  //   ]
  // }
]
</script>


# 认识我们的团队

目前由一个学生团队进行本项目的开发和日常维护，下面是对主要成员的介绍。

<VPTeamMembers size="small" :members="members" />


更多参与者和贡献细节请前往 [GitHub Contributors](https://github.com/BF-Teams/bfui-vue/graphs/contributors)
