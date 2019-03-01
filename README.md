## dva-mobile-pro
  使用dva和ant design pro搭建的移动端框架

## 自动集成
  使用dva创建项目时，自动集成了Less，autoprefixer

## eslint
  基本使用：安装eslint-config-airbnb，然后去.eslintrc.js里配置即可

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
    
