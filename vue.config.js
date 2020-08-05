'use strict';
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
        // 配置别名，可根据需要进行设置
        // assets: resolve('src/assets'),
        // components: resolve('src/components'),
        // views: resolve('src/views'),
      },
    },
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/styles/variables.less')],
    },
  },
};
