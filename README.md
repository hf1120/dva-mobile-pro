## dva-mobile-pro
  使用dva和ant mobile搭建的移动端框架

# css和js语法校验，git提交校验和代码美化

## 自动集成
  使用dva创建项目时，自动集成了Less，autoprefixer

## eslint
  基本使用：
  
  1.安装eslint-config-airbnb，然后去.eslintrc.js里配置

  2.安装eslint-plugin-jsx-a11y(这个版本可能不好搭配)

## stylelint 校验css语法
*  基本使用：(根目录增加.stylelintrc文件)

  1.安装stylelint, stylelint-config-standard (以这个为标准)

  2.安装husky (可以在git的 pre-commit 阶段就执行一系列流程保证每一个 commit 的正确性)

  用法："scripts": { "precommit": "stylelint \"src/**/*.less\" --syntax less" },
        
  解释：--syntax less，校验less语法

*  高级使用：(配合lint-staged一起使用)

  1.安装lint-staged (只校验当前改动的信息)

  2.安装stylelint-config-prettier (前提用到了prettier，如果能通过这个美化的，就不会再报错中出现了，比如缩进，空格问题)

  用法：在.stylelintrc中extends中增加stylelint-config-prettier即可

```
"scripts": {
  "precommit": "npm run lint-staged",
  "lint-staged": "lint-staged",
  "lint-staged:js": "eslint --ext .js"
},
"lint-staged": {
  "**/*.{js,jsx,less}": [
    "git add" // 最后重新添加
  ],
  "**/*.{js,jsx}": "npm run lint-staged:js",
  "**/*.less": "stylelint --syntax less"
}
```

  解释：

  1.--ext 允许你指定 ESLint 在指定的目录下查找 JavaScript 文件时要使用的文件扩展名。默认情况下，它使用 .js 作为唯一性文件扩展名

  2.eslint --ext .js 校验.js文件， eslint --ext .js, .ts 校验.js和.ts文件

## prettier 美化代码 自动让代码风格统一，格式优美，解决了ESLint统一代码风格不足的问题
  用法：在下面增加 "prettier --write" (在根目录增加.prettierrc和.prettierignore)

```
"lint-staged": {
    "**/*.{js,jsx,less}": [
      "prettier --write",
      "git add" // 最后重新添加
    ],
    "**/*.{js,jsx}": "npm run lint-staged:js",
    "**/*.less": "stylelint --syntax less"
  }
```
  1.安装eslint-config-prettier (通过使用eslint-config-prettier配置，能够关闭一些不必要的或者是与prettier冲突的lint选项。这样我们就不会看到一些error同时出现两次。)

  用法：.eslintrc.js中extends: ['airbnb', 'prettier'],


## 插件介绍（--save）
  * @babel/polyfill

  作用：让你可以使用最新的api，比如Array.from或Object.assign

  使用：在应用程序的顶部使用

  * classnames

  作用：合并class, 结合CSS Modules可以轻松实现代码命名冲突问题，也可以实现class的CRUD

  * enquire-js

  作用：用于屏幕大小改变时的监听（也可以判断手机和电脑）

  * fastclick

  作用：解决移动设备上的浏览器默认会在用户点击屏幕大约延迟300毫秒后才会触发点击事件

  * moment

  作用：时间插件

  * numeral

  作用：是一个用于格式化和数字四则运算的js库

  * path-to-regexp

  作用：该工具库用来处理 url 中地址与参数，能够很方便得到我们想要的数据。可以看成是 url 字符串的正则表达式

  * qs

  作用：对参数进行序列化
    
  * react-container-query (可配合react-document-title使用)

  作用：媒体查询 响应式组件

  * react-document-title

  作用：可以根据路由修改页面title

  * setprototypeof
  作用：让低版本浏览器兼容的插件

  * rollbar

  记录前台log日志

  * url-polyfill
  作用：未知

## 插件介绍（--save-dev）

  * babel-plugin-dva-hmr

  作用：热更新

  * mockjs

  作用：mock数据

  * cross-env

  作用：能跨平台地设置及使用环境变量
