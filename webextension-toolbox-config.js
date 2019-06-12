/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  webpack: (config, { dev, vendor }) => {
    // Perform customizations to webpack config
    config.module.rules.push(
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
        test: /\.svg$/,
        loader: "svg-inline-loader"
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
    );

    const myPlugin = new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    });

    config.plugins.push(myPlugin);
    return config;
  }
};
