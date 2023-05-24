const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const webpackMerge = require("webpack-merge");

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);
  const singleSpaConfig = {
    output: {
      library: 'app1',
      libraryTarget: 'umd',
      filename: 'main.js'
    },
    externals: {
      "@sifast/navbar": "@sifast/navbar",
    }
  };
  const mergedConfig = webpackMerge.smart(singleSpaWebpackConfig, singleSpaConfig);
  return mergedConfig;
}