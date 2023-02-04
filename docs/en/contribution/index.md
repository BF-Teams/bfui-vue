<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/81922999?v=4',
    name: 'Barry-Flynn',
    title: 'Creator',
    org: 'BF-Teams',
    orgLink: 'https://github.com/BF-Teams/',
    desc: 'Technical architecture, documentation maintenance and component development of this project',
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
    desc: 'Component library developer',
    links: [
      { icon: 'github', link: 'https://github.com/sleep-earily' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/80016783?v=4',
    name: '邱钧茂',
    title: 'Developer',
    desc: 'Component library developer',
    links: [
      { icon: 'github', link: 'https://github.com/Eternal-rr' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/106507183?v=4',
    name: '张玉婷',
    title: 'Developer',
    desc: 'Component library developer',
    links: [
      { icon: 'github', link: 'https://github.com/99999521' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/111298893?v=4',
    name: '张宇晨',
    title: 'Developer',
    desc: 'Component library developer',
    links: [
      { icon: 'github', link: 'https://github.com/zychhh000' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/97940554?v=4',
    name: '解睿',
    title: 'Developer',
    desc: 'Component library developer',
    links: [
      { icon: 'github', link: 'https://github.com/sherry-thanks' },
    ]
  }
]
</script>

# Join Us

We always keep an open mind and always welcome you with open arms, regardless of nationality or color.

Our well-prepared guide will guide you on how to contribute to BFUI, please take a few minutes to read about it before submitting Issues or Pull Requests.

## About our team

BFUI-vue is currently developed and maintained daily by a team of students, below is an introduction to the key members.

<VPTeamMembers size="small" :members="members" />
