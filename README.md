<br>

<p align='center'>
<a href="./README.en.md">简体中文</a> | <b>English</b>
</p>

## 前言

根据源仓库进行修改更新，旨在不断迭代和更新新的技术栈和体系来体验新型技术。

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - 快，且更快！
- 💪 [Typescript](https://www.typescriptlang.org/) - 当然！必不可少
- 🎉 [Element Plus 开箱即用](https://github.com/element-plus/element-plus) - 基于 Vue.js 3 的强大 UI 库
- 🔥 [Axios 配置和封装](https://github.com/axios/axios) - 基于 Promise 的 HTTP 请求库
- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)
- 💡 [Vue Router 4](https://router.vuejs.org/zh/) - Vuejs 的官方路由
- 📦 [组件自动按需加载](https://github.com/antfu/unplugin-vue-components) - 自动按需注册组件, 无需 import
- 📥 [API 自动按需加载](https://github.com/antfu/unplugin-auto-import) - 无需手动 import 进行引入
- 🍍 [Pinia 状态管理](https://pinia.esm.dev/) - 你将会喜欢上的 Vue Store
- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎
- 😃 [icones](https://github.com/antfu/unplugin-icons) - 强大的图标库，各种图标集为你所用
- 🌍 [I18n 国际化开箱即用](./locales) - 想要翻译？是的，都可以！
- 👩‍🎨 [NProgress](https://github.com/rstacruz/nprogress) - 页面加载进度反馈
- 😃 [SVG 支持](https://github.com/jpkleemans/vite-svg-loader) - 支持以 组件形式使用 SVG 图片
- 📑 [Markdown 支持](https://github.com/antfu/vite-plugin-md) - 随意的在页面中嵌入 Markdown
- 🔑 完整支持的代码风格规范和代码提交规范
- ☁️ 支持零配置部署 Netlify

## 已配置

### UI 框架

- [Element Plus](https://github.com/element-plus/element-plus) - 基于 Vue.js 3 的强大 UI 库

### Icons

- [🔍Icônes](https://icones.netlify.app/) - 使用任意的图标集
  - [unplugin-icons](https://github.com/antfu/unplugin-icons) - 自动按需引入你所需要的图标！

### 插件

- [Vue Router 4](https://router.vuejs.org/zh/) - Vuejs 的官方路由
- [Pinia](https://pinia.esm.dev) - 新一代的 Vue Store 状态管理
- [Axios](https://github.com/axios/axios) - 基于 Promise 的 HTTP 请求库
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - 自动按需加载组件
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - 自动按需加载 API
- [vite-plugin-vue-markdown](https://github.com/antfu/vite-plugin-vue-markdown) - Markdown 作为组件，也可以让组件在 Markdown 中使用
  - [markdown-it-prism](https://github.com/jGleitz/markdown-it-prism) - [Prism](https://prismjs.com/) 的语法高亮
  - [prism-theme-vars](https://github.com/antfu/prism-theme-vars) - 利用 CSS 变量自定义 Prism.js 的主题
  - [markdown-it-link-attributes](https://github.com/crookedneighbor/markdown-it-link-attributes) - 统一设置 Markdown 里的超链接跳转方式
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - 国际化
  - [vite-plugin-vue-i18n](https://github.com/intlify/vite-plugin-vue-i18n) - Vue I18n 的 Vite 插件
- [vite-plugin-fonts](https://github.com/stafyniaksacha/vite-plugin-fonts) - Vite 的字体加载器
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集
- [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader) - 支持以 组件形式使用 SVG 图片
- [unplugin-vue-router](https://github.com/posva/unplugin-vue-router)

### Commitizen 相关工具

- commitizen - 提供规范化的提交消息格式和交互式提交流程的命令行工具。
- cz-customizable - 可定制的 Commitizen 适配器，允许根据项目需求自定义提交类型、作用域等。

### Commitlint 相关工具

- commitlint - 用于校验提交消息是否符合规范的工具。
- @commitlint/config-conventional - 提供符合 Angular 风格的提交消息校验规则。

### 编码风格

- [ESLint](https://eslint.org/) 配置为 [Airbnb Style](https://github.com/airbnb/javascript)

### 规范

- [Angular 约定](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)

### 编码风格

- 使用 Composition API 地 [`<script setup>` SFC 语法](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) 配置为 [@antfu/eslint-config](https://github.com/antfu/eslint-config), 单引号, 无分号.

### 开发工具

- [TypeScript](https://www.typescriptlang.org/)
- [Netlify](https://www.netlify.com/) - 零配置的部署
- [VS Code 扩展](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 IDE 支持
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - 图标内联显示和自动补全
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - 多合一的 I18n 支持
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 代码质量和规则检查
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 专注于代码格式化、美化代码
  - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - 编码风格检查

## 现在可以试试!

### GitHub 模板

[使用这个模板创建仓库](https://github.com/wrxinyue/vite-template/generate).

### 克隆到本地

```bash
git clone https://github.com/nekobc1998923/vitecamp.git my-vitecamp-app
cd my-vitecamp-app
pnpm i
```

## 清单

使用此模板时，请尝试按照清单正确更新你自己的信息

- [ ] 在 `LICENSE` 中改变作者名
- [ ] 在 `package.json` 中改变作者名
- [ ] 在 `.env` 中改变标题
- [ ] 在 `public` 目录下改变 favicon
- [ ] 整理 `README `并删除路由

然后，你就可以享受编写代码的乐趣了 :)

## 使用

### 开发

只需要执行以下命令就可以在 http://localhost:8080 中看到

```bash
pnpm run dev
```

### 构建

构建该应用只需要执行以下命令

```bash
pnpm run build
```

然后你会看到用于发布的 `dist` 文件夹被生成。

## 参考

- https://github.com/nekobc1998923/vitecamp
- https://github.com/antfu/vitesse

