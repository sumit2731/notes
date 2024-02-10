const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
/**
 * Module federation Plugin, avalaible by default in webpack
 */

const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/hello-world.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    /**
     * Note that all other applications will me refering to this application using public URL and this publicUrl is baked
     * into a remoteEntryFile and we need to make sure that this is correct.during build process webpack does not know where
     * we are going to deploy our application. I can make build in my local system and then copy my assets to cdn,there is no way
     * for webpack to know public url for that cdn.therefore we need to tell webpack which url we are going to use.we tell
     * webpack this via publicUrl
     */
    publicPath: "http://localhost:9001/",
  },
  mode: "development",
  devServer: {
    port: 9001,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "hello-world.html",
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "hello-world.html",
      title: "Hello world",
      description: "Hello world",
      template: "src/page-template.hbs",
    }),
    new ModuleFederationPlugin({
      name: "HelloWorldApp",
      /**
       * During build process webpack will generate a file, that contains everything that
       * this application exports to outer world, so that other applications can use that.
       * filename is name of that file.by convention people name this as remoteFile
       * exposes- name of modules that will be exposed and path to them
       *
       * Note that all other applications will me refering to this application using public URL and this publicUrl is baked
       * into a remoteEntryFile and we need to make sure that this is correct.during build process webpack does not know where
       * we are going to deploy our application. I can make build in my local system and then copy my assets to cdn,there is no way
       * for webpack to know public url for that cdn.therefore we need to tell webpack which url we are going to use.
       *
       * There is already a option in configuration for this that we can we can use for this, this is called publicPath
       */
      filename: "remoteEntry.js",
      exposes: {
        "./HelloWorldButton":
          "./src/components/hello-world-button/hello-world-button.js",
      },
    }),
  ],
};
