# 参与开发

如果你是第一次在 GitHub 上发起 Pull Request ，可以阅读下面这两篇文章来学习：

- [第一次参与开源项目](https://github.com/firstcontributions/first-contributions/blob/main/translations/README.zh-cn.md)
- [如何优雅地在 GitHub 上贡献代码](https://segmentfault.com/a/1190000000736629)

我们为你精心准备了详尽的指南，指导你如何为 BFUI 贡献一份自己的力量。

请在参与开发之前花几分钟认真阅读本页内容。

## 项目技术栈

如果想要**深度参与**本项目的开发，您可能需要了解以下内容：

- 仓库管理模式：menorepo（[Pnpm Workspace](https://pnpm.io/zh/workspaces)）
- 依赖管理：[pnpm](https://pnpm.io/zh/)
- 视图驱动框架：[Vue 3](https://cn.vuejs.org/)
- 脚手架工具：[create-vue](https://github.com/vuejs/create-vue)
- 打包构建工具：[Vite](https://cn.vitejs.dev/)、[Rollup](https://rollupjs.org/)
- IDE 编辑器：[VS Code](https://code.visualstudio.com/)
- 开发语言：[Less](https://lesscss.org/)、[JavaScript + Es6](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)、[TypeScript](https://www.typescriptlang.org/zh/)
- 代码风格：`Prettier + Eslint + Stylelint`
- 测试工具：[Vitest](https://vitest.dev/)（Unit）、[Cypress](https://www.cypress.io/)（E2E）
- 代码提交：`Husky + Lint-staged + Commitlint`
- 文档构建：[VitePress](https://vitepress.vuejs.org/)
- 版本控制：[Git](https://git-scm.com/book/zh/v2)、[GitHub](https://github.com/)
- CI/CD：[Github Actions](https://docs.github.com/zh/actions)

当然，也同样欢迎技术水平不太高的同学对本项目做出贡献，因为我们的初始团队就是一群热爱开发的高校学生，目的就是在共建共享的开源生态中学习成长。欢迎向我们提交 [Issues](https://github.com/BF-Teams/bfui-vue/issues) 来给出建议或反馈 Bug，也欢迎大家提交你的贡献并创建 [Pull Request](https://github.com/BF-Teams/bfui-vue/pulls)，或者其他任何形式的对本项目的参与和支持。

我们始终期待同大家一起构筑代码世界的璀璨绚丽！

## 目录结构

以下是本项目的大致目录结构，有助于您快速了解不同文件的位置：

::: details 点击展开目录结构

```sh
<root>
  ├─ docs/        # 项目文档目录
  │   ├─ en/
  │   │   ├─ guide/
  │   │   ├─ component/
  │   │   └─ index.md # 英文文档首页
  │   ├─ zh/
  │   │   ├─ guide/
  │   │   ├─ component/
  │   │   └─ index.md # 中文文档首页
  │   └─ index.md     # 项目文档首页（与中文文档首页相同）
  │
  ├─ packages/    # 项目模块目录
  │   ├─ components/  # 组件代码
  │   │   ├─ button/        # 单个组件
  │   │   └─ index.ts       # 组件库入口文件
  │   └─ utils/       # 公共方法
  │
  ├─ scripts/     # 自定义脚本命令目录
  │
  ├─ test/        # 测试目录
  │   ├─ e2e/           # E2E UI测试
  │   ├─ snap/          # snap 快照测试
  │   ├─ utils/         # unit 单元测试
  │   └─ README.md      # 测试规范
  │
  ├─ typings/     # 类型声明目录
  │
  ├─ utils/       # 自定义工具函数目录
  │
  └─ README.md    # 项目自述文件
```

:::

## 环境准备

- 在进行本地开发前，请先确保开发环境中安装了 [Node.js](https://nodejs.org/)（>=16.0.0）

  ```sh
  # 查看版本号
  node -v
  ```

- 本项目使用 pnpm 进行依赖管理，如果没有安装，请全局安装并下载项目依赖：

  ```sh
  # 全局安装pnpm
  npm install pnpm -g

  # 查看版本号
  pnpm -v

  # 下载项目依赖
  pnpm install
  ```

## 开发步骤

参与本项目的开发，您可能需要执行以下步骤：

### 1. Star 仓库

点亮 [本仓库](https://github.com/BF-Teams/bfui-vue/) 右上角的 `Star` 按钮，这代表着您的认可，也是对我们的极大鼓励！

### 2. Fork 仓库

请 `Fork` [本仓库](https://github.com/BF-Teams/bfui-vue/)，这个操作会将代码仓库复制到你的 GitHub 账户名下。

### 3. Clone 仓库

在本地对您 GitHub 账号里 Fork 后的仓库执行克隆操作（注意替换为你的用户名）：

```sh
# 克隆项目仓库
git clone git@github.com:YourName/bfui-vue.git
```

进入项目文件夹，将官方仓库添加为上游仓库，用于跟踪最新源码：

```sh
git remote add upstream git@github.com:BF-Teams/bfui-vue.git
```

### 4. 创建新分支

项目的主分支(main)中存放的是无缺陷的、经过良好测试并且稳定的代码。在日常开发中，只要是开发新需求，请都在一个新的功能分支上进行开发，不要直接在 main 分支上修改代码。

所以在撰写代码之前，请创建新的分支，例如想为按钮组件开发颜色属性 `feat/button-color`

```sh
# 创建 feat/button-color 分支，并通过 checkout 切换到该分支
git checkout -b feat/button-color

# 查看所有分支
git branch
```

接下来就可以在此分支上大展身手了。

```sh
# 开始开发
pnpm dev

# 本地文档站点 http://localhost:8592/
pnpm docs:dev
```

## 代码风格规范

在编写代码时，请注意保持风格统一：

- 使用 **Prettier** 进行代码格式化（VSCode 快捷键 `Shift + Alt + F`）
- 确保代码可以通过仓库的 **Stylelint** 样式校验
- 确保代码可以通过仓库的 **ESLint** 校验

## 代码提交规范

- 在提交代码时，请规范书写 commit 信息，如 `git commit -m "docs: update develop.md"`

- 需按照 `<type>(<scope>): <subject>` 格式才能通过 **Commitlint** 校验。
  1. `<type>` 用于说明 commit 的类别，只允许使用下面几个标识：
     ```js
     'feat', // 新特性、需求，新增功能
     'fix', // bug 修复
     'docs', // 文档内容改动
     'style', // 不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
     'refactor', // 代码重构，注意与 feat 和 fix 有区别，注意区分不要混淆
     'test', // 添加测试或者修改现有测试
     'chore', // 不修改 src 或者 test 的其余修改，例如构建过程或辅助工具的变动，各种配置文件的修改等
     'merge', // 合并分支
     'perf', // 性能优化，提高性能的改动
     'revert', // 执行 git revert 打印的 message，版本回滚、代码回退
     'build', // 构造工具的或者外部依赖的改动，例如 webpack、npm
     'ci', // 与 CI（持续集成服务）有关的改动
     ```
  2. `<scope>` 为可选参数，用于说明 commit 影响的范围，比如数据层、控制层、视图层等。
  3. `<subject>` 是 commit 目的的简短描述，以动词开头，首字母小写，结尾不加句号。

:::tip 请注意 commit msg 内容不要写得很简单随意，也不要很冗余。尽量使别人看到后就可以获知该 commit 用意，让其与你提交的变更代码建立联系。在此发出倡议：

1. **One Thing，One Commit.** 在提交 commit 的时候尽量保证这个 commit 只做一件事情，比如实现某个功能或者修改了配置文件。
2. **不要 commit 一半的工作。** 当开发任务没有完整的完成的时候，不要 commit。这不是说每次 commit 都需要开发完成一个非常完整的大功能，而是当把功能切分成许多小的但仍然具备完整性的功能点的时候，开发人员需要完整完成这个功能点之后才能 commit。
3. **经常 commit。** 经常使用 commit 能够使你的 commit（里的修改内容）越小，并且能使你 commit 相关的修改，多次 commit 允许你推送自己代码到远程分支上的频率增加，能有效的减少 merge 代码时出现的代码冲突问题，因为多次 commit 能使开发团队其他人的代码库得到及时的更新。
4. **请在 commit 之前测试。** 尽量保证你所开发的功能是完整无误的，在 commit 代码之前的对代码充分测试是非常重要的，可以避免有问题的代码被其他开发人员使用。

:::

## 代码发布流程

### 1. 合并修改

当我们开发新功能时，经常会遇到远程上游仓库(upstream)的主分支有了新的更新，从而会导致提交 Pull Request 时出现代码冲突，因此可以在提交前先把远程其他开发者的 commit 和我们的 commit 合并。

- 请从功能分支切换到主分支

  ```sh
  git checkout main
  ```

- 拉取远程 main 分支最新代码，可能有其他人新提交的 commit

  ```sh
  git pull upstream main
  ```

- 切换回自己创建的功能分支，这里依旧用 `feat/button-color` 分支举例，如果忘记自己创建的分支名可以用 `git branch` 查看：

  ```sh
  git checkout feat/button-color
  ```

- 把 `main` 分支的 commit 合并到 `feat/button-color` 分支上来:

  ```sh
  git rebase main
  ```

- 把功能分支 `feat/button-color` 发布到自己 GitHub 账户的仓库中
  ```sh
  # 首次推送某分支需要 -u 参数
  git push -u origin feat/button-color
  ```

### 2. 提出 Pull Request

- 前往 Github 你的代码仓库，你会看到一个 `Compare & pull request` 的按钮，点击该按钮。

- 接着简单填写信息之后再点击 `Create pull request` 按钮，正式提交 pull request。

仓库维护者在审阅您的代码后，会将其合并到项目的主分支，届时你会收到邮件通知。

:::tip 【Pull Request 规范】在提交 Pull Request 时，请注意：

- 如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决单个问题、添加单个功能。
- 当新增组件或者修改原有组件时，记得增加或者修改对应的单元测试，保证代码的稳定。
- 在 PR 中请添加合适的描述，并关联相关的 Issue。
- [关于 Pull Request 的十个建议](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=204712314&idx=3&sn=c25d2651958926bef713bcb2413bb3e1&scene=0#rd)

:::

### 3. Pull Request 流程

- **Fork** 主仓库，如果已经 fork 过，请**同步主仓库的最新代码**。
- 基于 fork 后仓库的 main 分支**新建一个分支**，比如 feature/button_color。
- 在**新分支**上进行**开发**，开发完成后，提 **Pull Request** 到主仓库的 **main 分支**。
- Pull Request 会在 Review 通过后被合并到主仓库。
- 等待 BFUI 发布新版本，一般是积攒到足够数量的代码更改后。
