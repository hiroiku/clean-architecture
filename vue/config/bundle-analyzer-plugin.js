const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = () => {
  const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
    analyzerMode: process.env.NODE_ENV === 'production' ? 'static' : 'disabled',
    reportFilename: `${process.cwd()}/report/index.html`,
  });

  return bundleAnalyzerPlugin;
};
