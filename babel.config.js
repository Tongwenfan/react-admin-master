const { argv } = require('yargs');

const isDev = argv.mode === 'development';
// test
const plugins = [
  // [
  //   'const-enum',
  //   {
  //     transform: 'constObject',
  //   },
  // ],
  // 'lodash',
  // '@babel/plugin-transform-runtime',
  //支持import 懒加载
  '@babel/plugin-syntax-dynamic-import',
  // '@babel/plugin-transform-async-to-generator',
  // 'transform-class-properties',

  // 按需加载antd
  [
    'import',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css', // or true
    },
    'antd',
  ],
];
module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      [
        '@babel/preset-env',
      ],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
      // '@babel/preset-typescript',
    ],
    plugins: isDev ? [...plugins, 'react-refresh/babel'] : [...plugins],
    // plugins: isDev ? [...plugins] : [...plugins],
  };
};