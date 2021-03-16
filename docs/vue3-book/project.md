# vue3项目技术栈分析

本节内容我们分析一下 vue3 使用到的技术栈，以及项目的目录结构。

## 下载项目

通过 `git clone  git@github.com:vuejs/vue-next.git` 下载项目。


## 项目结构

下图通过 tree 命令生成，`tree -I "node_modules|cache|test_*"`

```js
.
├── CHANGELOG.md 项目更新记录
├── LICENSE 版权说明
├── README.md 
├── api-extractor.json
├── jest.config.js 测试配置文件
├── package.json
├── packages 子项目
│   ├── compiler-core
│   ├── compiler-dom
│   ├── compiler-sfc
│   ├── compiler-ssr
│   ├── global.d.ts
│   ├── reactivity
│   ├── runtime-core
│   ├── runtime-dom
│   ├── runtime-test
│   ├── server-renderer
│   ├── shared
│   ├── size-check
│   ├── template-explorer
│   └── vue
├── rollup.config.js 打包配置
├── scripts 开发需要的脚本
│   ├── bootstrap.js
│   ├── build.js
│   ├── checkYarn.js
│   ├── dev.js
│   ├── release.js
│   ├── setupJestEnv.ts
│   ├── utils.js
│   └── verifyCommit.js
├── test-dts 测试脚本
│   ├── README.md
│   ├── component.test-d.ts
│   ├── componentTypeExtensions.test-d.tsx
│   ├── defineComponent.test-d.tsx
│   ├── functionalComponent.test-d.tsx
│   ├── h.test-d.ts
│   ├── index.d.ts
│   ├── inject.test-d.ts
│   ├── reactivity.test-d.ts
│   ├── ref.test-d.ts
│   ├── setupHelpers.test-d.ts
│   ├── tsconfig.build.json
│   ├── tsconfig.json
│   ├── tsx.test-d.tsx
│   └── watch.test-d.ts
├── tsconfig.json ts配置
├── yarn-error.log
└── yarn.lock
```

## 看 contributing.md

contributing.md 文件中说明了该如何开发项目。

## 如何开始

在开始之前，我们需要看下 packages/vue