const CracoLessPlugin = require("craco-less");
const rawLoader = require("craco-raw-loader");

module.exports = {
  // eslint: {
  //   configure: {
  //     overrides: {
  //       files: ["**/*.ts", "**/*.tsx"],
  //       rules: {
  //         // @typescript-eslint rules
  //         "@typescript-eslint/no-unused-vars": "off"
  //       }
  //     },
  //     rules: {
  //       // other rules
  //     }
  //   }
  // },
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
