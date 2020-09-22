
# 源码阅读

## 使用案例

最好的案例就是[ant-design-pro源码阅读](https://github.com/FunnyLiu/ant-design-pro/tree/readsource)

## 核心包umi

``` bash
├── umi
|  ├── bin
|  |  └── umi.js - 命令行入口
|  ├── index.js
|  ├── package.json
|  ├── src
|  |  ├── ServiceWithBuiltIn.ts - umi build和umi dev的本质，继承自CoreService
|  |  ├── cjs.ts - 导出util、types、runtime中的一切及defineConfig等相关方法
|  |  ├── cli.ts - 命令行真正执行，umi dev、umi build
|  |  ├── defineConfig.ts
|  |  ├── forkedDev.ts - umi dev真正执行的进程
|  |  ├── index.ts - 入口文件，合并.umi下core的导出项
|  |  ├── plugins
|  |  |  ├── fixtures
|  |  |  |  └── normal
|  |  |  └── umiAlias.ts
|  |  └── utils
|  |     ├── fixtures
|  |     |  └── normal
|  |     |     └── package.json
|  |     ├── fork.ts
|  |     ├── getCwd.ts
|  |     └── getPkg.ts
|  ├── tsconfig.json
|  └── types.d.ts
```

## 核心core

```
/Users/liufang/openSource/FunnyLiu/umi/packages/core
└── src
   ├── Config
   |  ├── Config.test.ts
   |  ├── Config.ts
   |  ├── fixtures
   |  |  ├── config-config
   |  |  |  └── config
   |  |  |     └── config.js
   |  |  ├── config-config-typescript
   |  |  |  └── config
   |  |  |     └── config.ts
   |  |  ├── default-config
   |  |  |  └── plugin.js
   |  |  ├── invalid-keys
   |  |  ├── local
   |  |  ├── schema
   |  |  |  ├── plugin_number.js
   |  |  |  └── plugin_string.js
   |  |  ├── umi-env
   |  |  ├── umi-env-dot-env
   |  |  |  └── config
   |  |  |     ├── config.cloud.js
   |  |  |     └── config.js
   |  |  ├── umi-env-dot-env-ext
   |  |  |  └── config
   |  |  |     ├── config.cloud.js
   |  |  |     ├── config.cloud.ts
   |  |  |     └── config.js
   |  |  ├── umirc
   |  |  └── umirc-typescript
   |  ├── types.d.ts
   |  └── utils
   |     ├── configUtils.test.ts
   |     ├── configUtils.ts
   |     ├── isEqual.test.ts
   |     ├── isEqual.ts
   |     ├── mergeDefault.test.ts
   |     └── mergeDefault.ts
   ├── Html
   |  ├── Html.test.ts
   |  ├── Html.ts
   |  ├── document.ejs
   |  ├── fixtures
   |  |  └── custome-tpl.ejs
   |  └── types.d.ts
   ├── Logger
   |  ├── Common.ts
   |  ├── Logger.test.ts
   |  ├── Logger.ts
   |  └── UmiError.ts
   ├── Route
   |  ├── Route.test.ts
   |  ├── Route.ts
   |  ├── fixtures
   |  |  ├── conventional-index-index
   |  |  |  └── pages
   |  |  |     └── index
   |  |  |        └── index.tsx
   |  |  ├── conventional-normal
   |  |  |  ├── layouts
   |  |  |  |  └── index.tsx
   |  |  |  └── pages
   |  |  |     ├── [post]
   |  |  |     |  ├── comments.tsx
   |  |  |     |  └── index.tsx
   |  |  |     ├── a.d.ts
   |  |  |     ├── b.test.ts
   |  |  |     ├── c.spec.ts
   |  |  |     ├── d.css
   |  |  |     ├── index.tsx
   |  |  |     └── users
   |  |  |        ├── [userId].tsx
   |  |  |        ├── _layout.tsx
   |  |  |        └── add.tsx
   |  |  ├── conventional-opts
   |  |  |  └── pages
   |  |  |     └── index.tsx
   |  |  └── conventional-singular-layout
   |  |     ├── layout
   |  |     |  └── index.tsx
   |  |     └── pages
   |  |        └── index.tsx
   |  ├── getConventionalRoutes.ts
   |  ├── routesToJSON.ts
   |  └── types.d.ts
   ├── Service
   |  ├── PluginAPI.ts - 提供插件注册等api，挂在this
   |  ├── Service.ts - 基类Service，供umi继承，并初始化插件、执行等等，umi执行时会到此处寻找挂载在this.commands上的命令
   |  ├── enums.ts - 一些枚举，特别是标识状态流程数值的enum
   |  ├── fixtures
   |  |  ├── api-args
   |  |  |  └── plugin.js
   |  |  ├── api-registerCommand
   |  |  |  └── plugin.js
   |  |  ├── api-registerCommand-aliased
   |  |  |  └── plugin.js
   |  |  ├── api-registerMethod
   |  |  |  ├── plugin_1.js
   |  |  |  ├── plugin_1_duplicated.js
   |  |  |  ├── plugin_1_duplicated_existsError_false.js
   |  |  |  ├── plugin_2.js
   |  |  |  ├── plugin_3.js
   |  |  |  └── plugin_3_api_foo.js
   |  |  ├── api-registerPlugins
   |  |  |  ├── plugin_1.js
   |  |  |  ├── plugin_3.js
   |  |  |  ├── plugin_5.js
   |  |  |  └── preset_1.js
   |  |  ├── api-registerPresets
   |  |  |  ├── preset_1.js
   |  |  |  └── preset_3.js
   |  |  ├── api-writeTmpFile
   |  |  |  ├── plugin-error.js
   |  |  |  └── plugin.js
   |  |  ├── applyPlugins
   |  |  |  ├── add.js
   |  |  |  ├── event.js
   |  |  |  ├── modify.js
   |  |  |  ├── stage.js
   |  |  |  └── stage_registerMethod.js
   |  |  ├── asyncPluginRegister
   |  |  |  └── foo.js
   |  |  ├── enableBy
   |  |  |  ├── appType.js
   |  |  |  ├── bar_enableByConfig.js
   |  |  |  ├── foo.js
   |  |  |  └── hoo_enableByFunction.js
   |  |  ├── getPaths-empty
   |  |  ├── getPaths-with-src
   |  |  |  └── src
   |  |  ├── has
   |  |  |  ├── bar_preset.js
   |  |  |  ├── foo_plugin.js
   |  |  |  └── mie_plugin_enableByConfig.js
   |  |  ├── loadDotEnv
   |  |  ├── no-package-json
   |  |  ├── normal
   |  |  |  ├── approot
   |  |  |  |  └── nextlevel
   |  |  |  |     └── pages
   |  |  |  |        └── test.tsx
   |  |  |  ├── package.json
   |  |  |  ├── plugin_1.js
   |  |  |  ├── plugin_2.js
   |  |  |  ├── preset_1
   |  |  |  |  ├── index.js
   |  |  |  |  ├── plugin_1.js
   |  |  |  |  ├── plugin_2.js
   |  |  |  |  └── preset_1
   |  |  |  |     ├── index.js
   |  |  |  |     └── plugin_1.js
   |  |  |  └── preset_2
   |  |  |     ├── index.js
   |  |  |     └── plugin_1.js
   |  |  ├── plugin-register-throw-error
   |  |  |  └── plugin.js
   |  |  ├── plugin-syntax-error
   |  |  |  └── plugin.js
   |  |  ├── plugin-with-config
   |  |  |  └── plugin_1.js
   |  |  ├── registerPlugin-conflict
   |  |  |  ├── plugin_1.js
   |  |  |  ├── plugin_2.js
   |  |  |  ├── preset_1.js
   |  |  |  └── preset_2.js
   |  |  └── skip-plugins
   |  |     ├── plugin_1.js
   |  |     ├── plugin_2.js
   |  |     ├── plugin_3.js
   |  |     └── plugin_4.js
   |  ├── getPaths.test.ts
   |  ├── getPaths.ts
   |  ├── types.ts
   |  └── utils
   |     ├── isPromise.ts
   |     ├── loadDotEnv.test.ts
   |     ├── loadDotEnv.ts
   |     └── pluginUtils.ts
   └── index.ts
```

## 运行时依赖runtime

负责一些运行时的依赖，比如react-router透传

```
├── src
|  ├── Plugin
|  |  ├── Plugin.test.ts
|  |  └── Plugin.ts
|  ├── dynamic
|  |  ├── dynamic.tsx
|  |  ├── loadable-context.ts
|  |  ├── loadable.d.ts
|  |  ├── loadable.js
|  ├── index.ts - 入口文件，透传react-router-dom的Link、NavLink、Prompt、Redirect、Route、Router、StaticRouter、MemoryRouter、Switch、matchPath、withRouter、useHistory、useLocation、useParams、useRouteMatch等相关API
|  └── utils
|     ├── assert.ts
|     └── index.ts
└── tsconfig.json
```

## 内置预设集合preset-built-in

在umi dev和umi build时使用的service会使用该内置预设集合

```
/Users/liufang/openSource/FunnyLiu/umi/packages/preset-built-in
└── src
   ├── fixtures
   |  ├── api-writeTmpFile
   |  |  ├── plugin-error.js
   |  |  └── plugin.js
   |  ├── api-writeTmpFile-ts
   |  |  └── plugin.js
   |  ├── api-writeTmpFile-ts-check
   |  |  └── plugin.js
   |  ├── build
   |  |  ├── package.json
   |  |  └── pages
   |  |     ├── index.tsx
   |  |     └── users.tsx
   |  ├── dev
   |  |  └── pages
   |  |     ├── index.css
   |  |     └── index.js
   |  ├── generate
   |  ├── global-files
   |  |  └── src
   |  |     ├── global.css
   |  |     ├── global.js
   |  |     └── pages
   |  |        └── index.jsx
   |  ├── html
   |  |  └── src
   |  |     └── pages
   |  |        └── index.jsx
   |  ├── ssr
   |  |  └── pages
   |  |     └── index.tsx
   |  ├── ssr-beforeRenderServer
   |  |  ├── app.ts
   |  |  └── pages
   |  |     └── index.tsx
   |  ├── ssr-dynamicImport
   |  |  └── pages
   |  |     ├── Bar.less
   |  |     ├── Bar.tsx
   |  |     └── index.tsx
   |  ├── ssr-getInitialPropsCtx
   |  |  └── pages
   |  |     └── index.tsx
   |  ├── ssr-htmlTemplate
   |  |  └── pages
   |  |     └── index.tsx
   |  ├── ssr-modifyServerHTML
   |  |  ├── app.ts
   |  |  └── pages
   |  |     └── index.tsx
   |  ├── ssr-stream
   |  |  └── pages
   |  |     └── index.tsx
   |  └── webpack
   ├── index.test.ts
   ├── index.ts
   └── plugins
      ├── commands
      |  ├── build
      |  |  ├── applyHtmlWebpackPlugin.ts
      |  |  ├── build.test.ts
      |  |  └── build.ts
      |  ├── buildDevUtils.ts
      |  ├── config
      |  |  └── config.ts
      |  ├── dev
      |  |  ├── createRouteMiddleware.ts
      |  |  ├── dev.ts - 真正的umi dev命令注入的地方
      |  |  ├── devCompileDone
      |  |  |  ├── DevCompileDonePlugin.ts
      |  |  |  └── devCompileDone.ts
      |  |  ├── mock
      |  |  |  ├── createMiddleware.test.ts
      |  |  |  ├── createMiddleware.ts
      |  |  |  ├── fixtures
      |  |  |  |  ├── conflict
      |  |  |  |  |  ├── mock
      |  |  |  |  |  |  ├── _c.js
      |  |  |  |  |  |  ├── a.js
      |  |  |  |  |  |  └── b.js
      |  |  |  |  |  └── pages
      |  |  |  |  |     ├── a
      |  |  |  |  |     |  └── _mock.js
      |  |  |  |  |     └── b
      |  |  |  |  |        └── _mock.js
      |  |  |  |  ├── createMiddleware
      |  |  |  |  |  ├── mock
      |  |  |  |  |  |  └── a.js
      |  |  |  |  |  └── pages
      |  |  |  |  ├── mock-files
      |  |  |  |  |  └── mock
      |  |  |  |  |     ├── a.js
      |  |  |  |  |     ├── a_2.js
      |  |  |  |  |     ├── b.js
      |  |  |  |  |     ├── string.js
      |  |  |  |  |     ├── with-keys.js
      |  |  |  |  |     ├── with-method.js
      |  |  |  |  |     └── with-query.js
      |  |  |  |  ├── normal
      |  |  |  |  |  ├── mock
      |  |  |  |  |  |  ├── _c.js
      |  |  |  |  |  |  ├── a.js
      |  |  |  |  |  |  └── b.js
      |  |  |  |  |  └── pages
      |  |  |  |  |     ├── a
      |  |  |  |  |     |  └── _mock.js
      |  |  |  |  |     └── b
      |  |  |  |  |        └── _mock.js
      |  |  |  |  ├── parse-failed
      |  |  |  |  |  └── mock
      |  |  |  |  |     └── error.js
      |  |  |  |  ├── ts
      |  |  |  |  |  └── mock
      |  |  |  |  |     └── a.ts
      |  |  |  |  └── umirc-mock-file
      |  |  |  |     └── mock
      |  |  |  |        └── a.js
      |  |  |  ├── mock.ts
      |  |  |  ├── utils.test.ts
      |  |  |  └── utils.ts
      |  |  ├── umi.png
      |  |  └── watchPkg.ts
      |  ├── generate
      |  |  ├── HTMLGenerator
      |  |  |  └── createHTMLGenerator.ts
      |  |  ├── PageGenerator
      |  |  |  ├── createPageGenerator.ts
      |  |  |  ├── page.css.tpl
      |  |  |  ├── page.js.tpl
      |  |  |  └── page.tsx.tpl
      |  |  ├── TmpGenerator
      |  |  |  └── createTmpGenerator.ts
      |  |  ├── generate.test.ts
      |  |  └── generate.ts
      |  ├── generateFiles.ts
      |  ├── help
      |  |  └── help.ts  - umi help的实现
      |  ├── htmlUtils.ts
      |  ├── plugin
      |  |  └── plugin.ts
      |  ├── version
      |  |  └── version.ts - umi version的实现
      |  └── webpack
      |     └── webpack.ts - umi webpack的实现
      ├── features
      |  ├── alias.ts
      |  ├── analyze.ts
      |  ├── autoprefixer.ts
      |  ├── base.ts
      |  ├── chainWebpack.ts
      |  ├── chunks.ts
      |  ├── copy.ts
      |  ├── cssLoader.ts
      |  ├── cssModulesTypescriptLoader.ts
      |  ├── cssnano.ts
      |  ├── define.ts
      |  ├── devScripts.ts
      |  ├── devServer.ts
      |  ├── devtool.ts
      |  ├── dynamicImport.ts
      |  ├── exportStatic.ts
      |  ├── externals.ts
      |  ├── extraBabelPlugins.ts
      |  ├── extraBabelPresets.ts
      |  ├── extraPostCSSPlugins.ts
      |  ├── forkTSChecker.ts
      |  ├── globalCSS.ts
      |  ├── globalJS.ts
      |  ├── hash.ts
      |  ├── html
      |  |  ├── favicon.ts
      |  |  ├── headScripts.ts
      |  |  ├── links.ts
      |  |  ├── metas.ts
      |  |  ├── scripts.ts
      |  |  ├── styles.ts
      |  |  ├── title.ts
      |  |  ├── utils.test.ts
      |  |  └── utils.ts
      |  ├── ignoreMomentLocale.ts
      |  ├── inlineLimit.ts
      |  ├── lessLoader.ts
      |  ├── manifest.ts
      |  ├── mountElementId.ts
      |  ├── mpa.ts
      |  ├── nodeModulesTransform.ts
      |  ├── outputPath.ts
      |  ├── plugins.ts
      |  ├── postcssLoader.ts
      |  ├── presets.ts
      |  ├── proxy.ts
      |  ├── publicPath.ts
      |  ├── runtimeHistory.ts
      |  ├── runtimePublicPath.ts
      |  ├── singular.ts
      |  ├── ssr
      |  |  ├── constants.ts
      |  |  ├── fixtures
      |  |  |  └── normal
      |  |  |     └── customDist
      |  |  |        └── umi.server.js
      |  |  ├── ssr.test.ts
      |  |  ├── ssr.ts
      |  |  └── templates
      |  |     ├── clientExports.tpl
      |  |     ├── renderServer
      |  |     |  ├── renderServer.test.tsx
      |  |     |  └── renderServer.tsx
      |  |     ├── server.tpl
      |  |     ├── utils.test.tsx
      |  |     └── utils.ts
      |  ├── styleLoader.ts
      |  ├── targets.ts
      |  ├── terserOptions.ts
      |  ├── theme.ts
      |  └── umiInfo.ts
      ├── generateFiles
      |  ├── constants.ts
      |  ├── core
      |  |  ├── configTypes.ts
      |  |  ├── fixtures
      |  |  |  └── polyfill
      |  |  |     ├── imports
      |  |  |     └── normal
      |  |  ├── history.runtime.tpl
      |  |  ├── history.sham.tpl
      |  |  ├── history.tpl - 对外暴露的history定义于此
      |  |  ├── history.ts
      |  |  ├── plugin.tpl
      |  |  ├── plugin.ts
      |  |  ├── pluginRegister.tpl
      |  |  ├── polyfill.test.ts
      |  |  ├── polyfill.tpl
      |  |  ├── polyfill.ts
      |  |  ├── routes.tpl
      |  |  ├── routes.ts
      |  |  ├── umiExports.test.ts
      |  |  └── umiExports.ts
      |  ├── umi.test.ts
      |  ├── umi.tpl
      |  └── umi.ts
      ├── registerMethods.ts
      ├── routes.ts
      ├── utils.test.ts
      └── utils.ts
```




English | [简体中文](./README.zh-CN.md)

# umi

[![codecov](https://codecov.io/gh/umijs/umi/branch/master/graph/badge.svg)](https://codecov.io/gh/umijs/umi) [![NPM version](https://img.shields.io/npm/v/umi.svg?style=flat)](https://npmjs.org/package/umi) [![CircleCI](https://circleci.com/gh/umijs/umi/tree/master.svg?style=svg)](https://circleci.com/gh/umijs/umi/tree/master) [![Build Status](https://dev.azure.com/umijs/umi/_apis/build/status/umijs.umi?branchName=master)](https://dev.azure.com/umijs/umi/_build/latest?definitionId=1&branchName=master) [![GitHub Actions status](https://github.com/umijs/umi/workflows/Node%20CI/badge.svg)](https://github.com/umijs/umi) [![NPM downloads](http://img.shields.io/npm/dm/umi.svg?style=flat)](https://npmjs.org/package/umi) [![Install size](https://badgen.net/packagephobia/install/umi)](https://packagephobia.now.sh/result?p=umi)

🍙 Extensible enterprise-level front-end application framework.

> Please consider following this project's author, [sorrycc](https://github.com/sorrycc), and consider starring the project to show your ❤️ and support.

---

## Features

* 🎉 **Extensible**, Umi implements the complete lifecycle and makes it extensible, and Umi's internal functions are all plugins. Umi also support plugins and presets.
* 📦 **Out of the Box**, Umi has built-in routing, building, deployment, testing, and so on. It only requires one dependency to get started. Umi also provides an integrated preset for React with rich functionaries.
* 🐠 **Enterprise**, It has been verified by 3000+ projects in Ant Financial and projects of Alibaba, Youku, Netease, 飞猪, KouBei and other companies.
* 🚀 **Self Development**, Including micro frontend library, component packaging, documentation tools, request library, hooks library, data flow, etc.
* 🌴 **Perfect Routing**, Supports both configuration routing and convention routing, while with functional completeness, such as dynamic routing, nested routing, permission routing, and so on.
* 🚄 **Future Ready**, Umi's community is also exploring new technologies. For example, modern mode, webpack @ 5, automated external, bundler less, etc.
* 🌈 **Support SSR**, Starts Server-Side Render friendly.

## Getting Started

Manually,

```bash
# Create directory
$ mkdir myapp && cd myapp

# Install dependency
$ yarn add umi

# Create page
$ npx umi g page index --typescript --less

# Start development
$ npx umi dev
```

Or [Getting Started with Boilerplate](https://umijs.org/docs/getting-started).

## Links

* [Top Feature Requests](https://github.com/umijs/umi/issues?q=is%3Aissue+is%3Aopen+label%3Atype%28enhancement%29+sort%3Areactions-%2B1-desc+) (Add your own votes using the 👍 reaction)
* [Newest Feature Requests](https://github.com/umijs/umi/issues?q=is%3Aopen+is%3Aissue+label%3Atype%28enhancement%29)
* [Top Bugs 😱](https://github.com/umijs/umi/issues?q=is%3Aissue+is%3Aopen+label%3Atype%28bug%29+sort%3Areactions-%2B1-desc+) (Add your own votes using the 👍 reaction)
* [Newest Bugs 🙀](https://github.com/umijs/umi/issues?q=is%3Aopen+is%3Aissue+label%3Atype%28bug%29)
* [Benchmarks](https://umijs.github.io/umi/dev/bench/index.html)

## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].

<a href="https://github.com/umijs/umi/graphs/contributors"><img src="https://opencollective.com/umi/contributors.svg?width=890&button=false" /></a>

## Feedback

| Github Issue | 钉钉群 | 微信群 |
| --- | --- | --- |
| [umijs/umi/issues](https://github.com/umijs/umi/issues) | <img src="https://img.alicdn.com/tfs/TB1WPiWNUY1gK0jSZFCXXcwqXXa-1125-1485.jpg" width="60" /> | <img src="https://img.alicdn.com/tfs/TB1_oU.TND1gK0jSZFsXXbldVXa-585-591.jpg" width="60" /> |

## LICENSE

[MIT](https://github.com/umijs/umi/blob/master/LICENSE)
