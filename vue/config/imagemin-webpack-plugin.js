const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

module.exports = () => {
  const imageminWebpackPlugin = new ImageminWebpackPlugin({
    disable: process.env.NODE_ENV !== 'production',
    gifsicle: { optimizationLevel: 2, interlaced: false },
    pngquant: { quality: 85 },
    svgo: { plugins: [{ removeViewBox: false }, { cleanupIDs: true }] },
    plugins: [ImageminMozjpeg({ progressive: true, quality: 85 })],
  });

  return imageminWebpackPlugin;
};
