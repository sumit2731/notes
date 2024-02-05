const path = require("path");
//const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },

  mode: "production",

  module: {
    /**
     * each rule has atleast 2 properties
     *  'test' - this regular expressions which is used to match files
     *  type or use - asset modules need 'type' property, 'use' is for loaders
     *    type accepts 4 values as shouwn in figure1 of section 3.
     */
    rules: [
      {
        test: /\.(png|jpg)$/,
        /**
         * It tells webpack to copy the required file to output directory.By default name of file is default hash of contents
         * of file with regional extension.
         */
        // type: "asset/resource",
        /**
         * Generates base 64 representation of your file and bakes it directly into JavaScript.
         */
        // type: "asset/inline",
        type: "asset",
        parser: {
          /**
           * This is the condition based on which webpack decides if it should use asset inline or asset resource.
           * Here we can specify the maximum size of the file which webpack is going to treat as an inline type of asset module.
           */
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3 kb
          },
        },
      },
      {
        test: /\.(text)$/,
        type: "asset/source",
      },
      /**
       * here we are using 2 loaders.
       * css-loader reads the content of css file and returns its content, but it does'nt do anything else with this css
       * style-loader takes this css and injects it into the page using style tags.using style-loader bundles your css togather
       * with your javascript into a single resulting file(in our case bundle.js),in future we will see how we can make
       * it generate separate files
       */
      {
        test: /\.(css)$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      /**
       * This loader will be apploed to all js files except those which are in nodde_modules folder
       * We also need to specify a couple of extra options for Babel Loader.As you will see in a moment,
       * we can specify extra options for any Webpack loader.Of course, this loader should support those options.
       *
       * first option is called presets.We need a special Babel preset which is called @babel/env.This compiles Ecmascript
       * 6/7/8/9/10, etc. down to Ecmascript five.
       *
       * As I already said earlier, class properties are not part of the official Ecmascript specification,so we need a
       *  special Babel plugin to support this feature.This Babel plugin is called plugin-proposal-class-properties.
       *
       * If you want to use another modern JavaScript feature which is not supported by major browsers yet,you should find a
       *  Babel plugin for that and add it to the list of plugins.You can use as many Babel plugins as you want.
       */
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
    //new TerserPlugin(), //reduces bundle size, included in production code by default, so removing it
    new MiniCssExtractPlugin({
      // filename: "styles.css",
      filename: "styles.[contenthash].css",
    }), // generates separate file for CSS
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.hbs",
      title: "Hello World",
      description: "Some description",
    }),
  ],
};
