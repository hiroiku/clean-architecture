const bundleAnalyzerPlugin = require('./config/bundle-analyzer-plugin');
const chunkedVendorPlugin = require('./config/chunked-vendor-plugin');
const imageminWebpackPlugin = require('./config/imagemin-webpack-plugin');
const stylelintWebpackPlugin = require('./config/stylelint-webpack-plugin');

module.exports = {
  publicPath: '.',
  lintOnSave: true,
  parallel: true,
  productionSourceMap: false,
  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {
      fix: true,
    },
  },
  css: {
    extract: false,
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/scss/mixin.scss";
          @import "~@/assets/scss/config.scss";
        `,
      },
    },
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => ({ ...options, limit: 0 }));
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'initial',
        cacheGroups: chunkedVendorPlugin(`${__dirname}/package.json`),
      },
    },
    plugins: [stylelintWebpackPlugin(), imageminWebpackPlugin(), bundleAnalyzerPlugin()],
  },
};
