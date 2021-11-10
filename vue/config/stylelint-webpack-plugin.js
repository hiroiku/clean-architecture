const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

module.exports = () => {
  const stylelintWebpackPlugin = new StylelintWebpackPlugin({
    files: ['./src/**/*.{vue,htm,html,css,sss,less,scss,sass}'],
  });

  return stylelintWebpackPlugin;
};
