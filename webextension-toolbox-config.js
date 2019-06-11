/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  webpack: (config, { dev, vendor }) => {
    // Perform customizations to webpack config
    console.log("initial config:", config);
    Object.assign(config, {
      // Define the entry points of our application (can be multiple for different sections of a website)
      entry: {
        main: "index.js"
      },

      // Define the destination directory and filenames of compiled resources
      // output: {
      //   filename: "[name].bundle.js",
      //   path: path.resolve(__dirname, "docs/dist")
      // },

      module: {
        rules: [
          {
            test: /\.scss$/,
            exclude: /(node_modules)/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                  url: false
                }
              },
              {
                loader: "postcss-loader",
                options: {
                  ident: "postcss",
                  plugins: [
                    require("autoprefixer")({ browsers: "last 3 versions" })
                  ]
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true,
                  outputStyle: !dev ? "compressed" : "expanded"
                }
              }
            ]
          },
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"]
              }
            }
          }
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
      ]
    });
    console.log("overwritten config:", config);

    return config;
  }
};
