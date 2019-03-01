# dva-mobile-pro
使用dva和ant design pro搭建的移动端框架

# 自动集成
  使用dva创建项目时，自动集成了Less，autoprefixer

# stylelint 校验css语法
  基本使用：(根目录增加.stylelintrc文件)
    1.安装stylelint, stylelint-config-standard (以这个为标准)
    2.安装husky (可以在git的 pre-commit 阶段就执行一系列流程保证每一个 commit 的正确性)
        用法："scripts": { "precommit": "stylelint \"src/**/*.less\" --syntax less" },
        解释：--syntax less，校验less语法
  高级使用：(配合lint-staged一起使用)
    1.安装lint-staged (只校验当前改动的信息)
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
        解释： --ext 允许你指定 ESLint 在指定的目录下查找 JavaScript 文件时要使用的文件扩展名。默认情况下，它使用 .js 作为唯一性文件扩展名
              eslint --ext .js 校验.js文件， eslint --ext .js, .ts 校验.js和.ts文件
