# 安装

::: tip

本项目正在迭代开发中，请等待稳定版本发布后再体验~

:::

## 使用包管理器

我们建议您使用包管理器（如 [npm](https://www.npmjs.com/)、[pnpm](https://pnpm.io/) 或 [Yarn](https://classic.yarnpkg.com/lang/en/)）安装 BFUI，然后您就可以使用打包工具，例如 [Vite](https://vitejs.dev/) 或 [webpack](https://webpack.js.org/)。

::: code-group

```sh [npm]
npm install @bf-teams/bfui-vue
```

```sh [pnpm]
pnpm add @bf-teams/bfui-vue
```

```sh [yarn]
yarn add @bf-teams/bfui-vue
```

:::

如果您的网络环境不好，建议使用相关镜像服务。如中国大陆用户可将您本地的 npm 远程下载地址切换为 [中国 NPM 镜像](https://github.com/cnpm/cnpm)：

```sh
# 查看当前仓库，默认为 https://registry.npmjs.org/
npm get registry

# 切换为镜像网址
npm config set registry https://registry.npmmirror.com/
```

## 浏览器引入

直接通过浏览器的 HTML 标签导入 BFUI，然后就可以使用全局变量 BFUI 了。

根据不同的 CDN 提供商有不同的引入方式， 我们在这里以 [unpkg](https://unpkg.com/) 和 [jsDelivr](https://jsdelivr.com/) 举例。 你也可以使用其它的 CDN 供应商。

::: code-group

```html [unpkg]
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/element-plus"></script>
</head>
```

```html [jsDelivr]
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/element-plus"></script>
</head>
```

:::


::: tip

我们建议使用 CDN 引入 BFUI 的用户在链接地址上锁定版本，以免将来 BFUI 升级时受到非兼容性更新的影响。 锁定版本的方法请查看 [unpkg.com](https://unpkg.com/)。

:::

通过 CDN 的方式我们可以很容易地使用 BFUI 写出一个 [Hello world 页面](https://element-plus.gitee.io/zh-CN/guide/installation.html#hello-world)。
