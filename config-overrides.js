/* eslint-disable react-hooks/rules-of-hooks */
const {
  useBabelRc,
  override,
  removeInternalBabelPlugin,
} = require('customize-cra');

const supportMjs = () => (webpackConfig) => {
  webpackConfig.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  });
  return webpackConfig;
};

module.exports = override(
  useBabelRc(),
  supportMjs(),
  removeInternalBabelPlugin('plugin-transform-exponentiation-operator'),
);
