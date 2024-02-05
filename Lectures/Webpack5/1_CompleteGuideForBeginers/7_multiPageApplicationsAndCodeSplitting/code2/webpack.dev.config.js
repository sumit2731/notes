const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "hello-world": "./src/hello-world.js",
    kiwi: "./src/kiwi.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },
  mode: "development",
  /**
   * These are 4 options out of many provided by webpack-dev-server
   */
  devServer: {
    port: 9000,
    //what exactly should be served on this port
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "index.html",
      /**
       * By default webpack-dev-server saves files on memory and does not save them on disk
       */
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3 kb
          },
        },
      },
      {
        test: /\.(text)$/,
        type: "asset/source",
      },
      {
        test: /\.(css)$/,
        use: [
          "style-loader",
          //   MiniCssExtractPlugin.loader, (In dev mode style loader will be used)
          "css-loader",
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          "style-loader",
          //   MiniCssExtractPlugin.loader, (In dev mode style loader will be used)
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // needs @babel/core, babel-loader
          options: {
            presets: ["@babel/env"], // @babel/preset-env
            plugins: ["@babel/plugin-proposal-class-properties"], //@babel/plugin-proposal-class-properties
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },

  plugins: [
    // new TerserPlugin(), //reduces bundle size, we dot want to minify our code in development

    // new MiniCssExtractPlugin({
    //   // filename: "styles.css",
    //   filename: "styles.[contenthash].css",
    // }), // generates separate file for CSS, not needed in dev mode

    /**
     * each time to generate build this will clear output.path folder
     * This link shares how to clean specific paths with this plugin -
     *  https://www.udemy.com/course/webpack-from-beginner-to-advanced/learn/lecture/10919562#questions/7464716
     */

    new CleanWebpackPlugin(),

    // new HtmlWebpackPlugin({
    //   template: "src/index.hbs",
    //   title: "Hello World",
    //   description: "Some description",
    // }),
    new HtmlWebpackPlugin({
      filename: "hello-world.html", //name of generated html file
      chunks: ["hello-world"], // this means chunks related to which entry point config should be added here
      title: "Hello World",
      template: "src/page-template.hbs",
      description: "Hello world",
      minify: false, // minifies the html file
    }),
    /**
     * This is to generate separate html file, each new instacnce will generate separate html file
     */
    new HtmlWebpackPlugin({
      filename: "kiwi.html",
      chunks: ["kiwi"],
      title: "Kiwi",
      template: "src/page-template.hbs",
      description: "Kiwi",
      minify: false, // minifies the html file
    }),
  ],
};
