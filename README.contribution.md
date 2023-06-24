# Bfui-vue Contribution Help

> 此文件内容是根据 [Vue 官网的介绍](https://cn.vuejs.org/guide/quick-start.html#creating-a-vue-application) 使用命令 `npm init vue@latest` 创建本项目时生成的，这一指令安装并执行了 [create-vue](https://github.com/vuejs/create-vue)，它是 Vue 官方的项目脚手架工具。
>
> 本项目在创建时只选择了 `TypeScript`、`Vue Router`、`Vitest`、`an End-to-End Testing Solution(Cypress)`、`ESLint` 和 `Prettier` 功能，没有选择 `JSX Support` 和 `Pinia` 功能。

This template should help get you started developing with Vue 3 in Vite.

这个模板应该可以帮助您开始使用 Vue 3 进行开发。

## Recommended IDE Setup

推荐的 IDE 设置(因为要用 Volar，所以请禁用 Vetur)：

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

> TypeScript 默认情况下无法处理 `.vue` 导入的类型信息，因此我们将 `tsc` CLI 替换为 `vue-tsc` 进行类型检查。在编辑器中，我们需要 [TypeScript Vue 插件 (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)，以使 Typescript 语言服务知道 `.vue` 类型。

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

> 如果你觉得独立的 TypeScript 插件不够快，Volar 还实现了一个更具性能的 [接管模式](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) 。您可以通过以下步骤启用它：
>
> 1. 禁用内置的TypeScript扩展
>    1) 从 VSCode 的命令选项板运行 `Extensions: Show Built-in Extensions`
>    2) 查找 `TypeScript 和 JavaScript 语言功能`，右键单击并选择 `禁用（工作区）`
> 2. 通过从命令选项板运行 `Developer: Reload Window` 来重新加载 VSCode 窗口。

## Customize configuration

自定义配置：

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

以下是项目设置的一些命令。

### Installation Dependencies

由于本项目使用了 pnpm 进行依赖管理，所以请使用如下命令安装依赖项，而不是使用 `npm install`：

```sh
pnpm install
```

[pnpm](https://www.pnpm.cn/) 是一个快速、节省磁盘空间的包管理器，它能够共享依赖项，减少重复的下载和存储，提高安装速度，并通过使用硬链接，节省磁盘空间。如果你的电脑没有安装，可以使用命令 `npm install -g pnpm` 进行全局安装。

### Compile and Hot-Reload for Development

编译和开发热加载：

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

用于生产的类型检查、编译和最小化：

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

使用 [Vitest](https://vitest.dev/) 运行单元测试：

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

使用 [Cypress](https://www.cypress.io/) 运行端到端测试：

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

> 这将针对Vite开发服务器运行端到端测试。它比生产构建快得多。
>
> 但仍然建议在部署之前使用 `test:e2e` 测试生产构建（例如，在CI环境中）：

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

使用 [ESLint](https://eslint.org/) 进行语法检测：

```sh
npm run lint
```

### About Docs

本项目文档采用的是 [VitePress](https://vitepress.dev/)，以下是一些相关命令：

```sh
# 开发文档
npm run docs:dev

# 构建文档
npm run docs:build

# 预览文档
npm run docs:preview
```

