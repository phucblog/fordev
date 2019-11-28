// const marked = require("marked");
// const renderer = new marked.Renderer();
// const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function(config, env) {
    // ...add your webpack config
    // config.resolve.plugins = config.resolve.plugins.filter(
    //   plugin => !(plugin instanceof ModuleScopePlugin)
    // );
    // config.module.rules.push({
    //   test: /\.md$/i,
    //   use: "raw-loader"
    //   // use: [
    //   //   {
    //   //     loader: "html-loader"
    //   //   },
    //   //   {
    //   //     loader: "markdown-loader",
    //   //     options: {
    //   //       pedantic: true,
    //   //       renderer
    //   //     }
    //   //   }
    //   // ]
    // });
    return config;
  }
};
