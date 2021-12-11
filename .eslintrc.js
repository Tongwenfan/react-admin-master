module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // airbnb 太严格 自己写一个基本版的就行 满足日常
  extends: [
    'plugin:react/recommended',
     "eslint:recommended"
    // 'airbnb', airbnb
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    "jsx-a11y"
  ],
  settings: {
    "react": {
      "version": "detect"
    }
  },
  // 当使用第三方的SDK时，eslint会报找不到，可以加入到globals，取消对这个的检查
  globals: {
    fengmap: true,
    React: true,
  },


  rules: {
    "no-undef": 0,
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 0, // 检查 effect 的依赖
    "no-cond-assign": 2,
    "no-console": [
      "error", {
        "allow": ["log", "warn", "error", "info", 'dir']
      }
    ],
    "no-unused-vars":0,
    // 禁止 function 定义中出现重名参数
    "no-dupe-args": 2,
    // 禁止对象字面量中出现重复的 key
    "no-dupe-keys": 2,
    // 禁止重复的 case 标签
    "no-duplicate-case": 2,
    // 禁止空语句块
    "no-empty": 2,
    // 禁止对 catch 子句的参数重新赋值
    "no-ex-assign": 2,
    // 禁止不必要的布尔转换
    "no-extra-boolean-cast": 2,
    // 禁止不必要的括号 //(a * b) + c;//报错
    "no-extra-parens": 0,

    //强制所有控制语句使用一致的括号风格
    "curly": 0,
    // 禁止 catch 子句的参数与外层作用域中的变量同名
    "no-catch-shadow": 0,
    // 不允许标签与变量同名
    "no-label-var": 2,
    // 禁用特定的全局变量
    "no-restricted-globals": 2,
    // 禁止 var 声明 与外层作用域的变量同名
    "no-shadow": 0,
    // 禁止覆盖受限制的标识符
    "no-shadow-restricted-names": 2,
    // 禁止将变量初始化为 undefined
    "no-undef-init": 2,
    // 禁止将 undefined 作为标识符
    "no-undefined": 0,
    // 不允许在变量定义之前使用它们
    "no-use-before-define": 0,


    // 不区分是否在 despendencies
    "import/no-extraneous-dependencies": 0,
    // 引用时候根据根目录基础
    "import/no-unresolved": 0,

    "block-spacing": 1,
    "consistent-this": [1, "self", "that", "_self", "_that", "vm", "_this"],

    "max-len": [2, 300, {
      "ignoreUrls": true
    }],
    "eol-last": 0,
    "new-cap": [2, {
      "newIsCap": true,
      "capIsNew": false
    }],
    // 不允许多个空行
    "no-multiple-empty-lines": [2, {
      "max": 2
    }],
    'react/display-name': 0,

    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-this-before-super": 2,
    "no-var": 1,

    "react/jsx-no-undef": 1,
    // 关闭解构赋值报错
    "react/destructuring-assignment": 0,
    // 允许在 .js 和 .jsx 文件中使用  jsx
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    // jsx > 紧跟着属性
    "react/jsx-closing-bracket-location": 0,
    // 不区分是否是 无状态组件
    "react/prefer-stateless-function": 0,
    // prop-types忽略children属性
    "react/prop-types": 0,
    // 关闭禁止prop-types类型
    "react/forbid-prop-types": 0,
    // 关闭default-props检查
    "react/require-default-props": 0,
    "react/no-deprecated": 2,
    'valid-typeof': 0,
    'no-debugger': 0,
    'react/jsx-no-target-blank': 0


  },
};
