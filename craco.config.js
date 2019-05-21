const CracoLessPlugin = require("craco-less");
const rawLoader = require("craco-raw-loader");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          javascriptEnabled: true
        }
      }
    },
    { plugin: rawLoader, options: { test: /\.(md|txt)$/ } }
  ]
};
