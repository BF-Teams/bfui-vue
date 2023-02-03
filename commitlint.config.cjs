// eslint-disable-next-line no-undef
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        // 主要 type
        "feat", // 新特性、需求，新增功能
        "fix", // bug 修复
        // 特殊 type
        "docs", // 文档内容改动
        "style", // 不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
        "build", // 构造工具的或者外部依赖的改动，例如 webpack、npm
        "refactor", // 代码重构，注意与 feat 和 fix 有区别，注意区分不要混淆
        "revert", // 执行 git revert 打印的 message，版本回滚、代码回退
        // 暂不使用 type
        "test", // 添加测试或者修改现有测试
        "perf", // 性能优化，提高性能的改动
        "ci", // 与 CI（持续集成服务）有关的改动
        "chore", // 不修改 src 或者 test 的其余修改，例如构建过程或辅助工具的变动，各种配置文件的修改等
      ],
    ],
  },
};
