const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    //path: "/dist",
    // /Users/sumeet.sood/notes/Lectures/Webpack5/1_CompleteGuideForBeginers/TUTORIAL/dist
    path: path.resolve(__dirname, "./dist"),
    /**
     * With webpack 5, 'auto' is default value of publicPath. auto means folder where our final bundle is placed. In code src will be - http://127.0.0.1:5500/code/dist/NameOfAsset
     * In earlier versions default value was empty path,if we set it to empty string then in code we can see that src of image is  = nameOfAsset
     * this is because webpack does not know from where to take this image.
     *
     * Webpack puts static file in dist folder, so we can give server path, file system path. if application is served from same domain as static file
     *  we can also give relative path.
     * In short whatever you give here will be concatenated with imageName to look for image.so do not forget '/'
     */
    /**
     * So if it works fine then why are we talking about it? Because there are some cases when public path should be specfifed explicitly
     *  a)If you are serving static files from CDN
     *  b)if you are using an Express.js server in order to serve your application, and you decided to use a special URL prefix to serve your static files?
     *  c)Another case when you need to care about public path would be using module Federation feature
     */
    //publicPath : 'auto'
    // publicPath: "http://127.0.0.1:5500/code/dist/",
    // publicPath: '/Users/sumeet.sood/notes/Lectures/Webpack5/1_CompleteGuideForBeginers/code/dist/23de234a71129d9c860b.jpg'
    // publicPath: "/Users/sumeet.sood/notes/Lectures/Webpack5/1_CompleteGuideForBeginers/code/dist/",
    // publicPath: "http://some-cdn.com/",
    // publicPath: "./",

    //publicPath: "./dist/", //or 'dist/'
    // making public path as empty as html is also inside dist folder. so erverything inside dist folder can be refered by relative pathOnly
    publicPath: "",

    /**
     * supported in webpack 5.2 and higher
     * clean options removes the old file before generating new one. this is what CleanWebpackPlugin does without
     *  any additional configs. but CleanWebpackPlugin can also remove files outside output.path, clean option
     * cannot do that
     */
    // clean: true,
    /**
     * But you can specify more options for clean
     *  dry - It will not remove the files actually but will just log that these files will be removed
     *  keep: you can specify which files you want to keep, value can be string, regular expression, or function
     *
     * In this lecture we will use CleanWebpackPlugin
     */
    // clean: {
    //   dry: true,
    //   keep: /\.css/,
    // },
  },
  /**
   * This option is avalaible from version -webpack4
   * None- means we do not want any built in optimizations
   */
  mode: "none",
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
  /**
   * Order of plugins - Technically, the order of plugins matters. Plugins are applied in the order you specified in the array (from first to last). However,
   * usually you don't have to think about the order of plugins, because plugins are based on events. Some plugins expose specific events, and other plugins
   * react on those events.

    In rare cases, some plugins will need to come after another plugins in order to override a specific event - but that only happened once to me during the
    last several years. So you don't have to worry about the order of plugins in 99% of the cases.
   */
  plugins: [
    new TerserPlugin(), //reduces bundle size
    new MiniCssExtractPlugin({
      // filename: "styles.css",
      filename: "styles.[contenthash].css",
    }), // generates separate file for CSS
    /**
     * each time to generate build this will clear output.path folder
     * This link shares how to clean specific paths with this plugin -
     *  https://www.udemy.com/course/webpack-from-beginner-to-advanced/learn/lecture/10919562#questions/7464716
     */

    // new CleanWebpackPlugin({
    //   /**
    //    * You can specify an array of the file patterns which you want to remove.All patterns are relative to the webpack
    //    * output.path directory.
    //    *
    //    * If we do not specifify this option then by default webpack clears output.path directory.But if we specify this option then we also
    //    * tell us that it should also clean output.path. we specify this by first pattern
    //    */
    //   cleanOnceBeforeBuildPatterns: [
    //     "**/*",
    //     //If you want to remove the files outside of the outputpath, you should specify an absolute path to the file patterns.
    //     //this will remove all files with all folders inside build folder, process.cwd - /Users/sumeet.sood/notes/Lectures/Webpack5/1_CompleteGuideForBeginers/code
    //     path.join(process.cwd(), "build/**/*"),
    //   ],
    // }),
    new CleanWebpackPlugin(),

    /**
     * This will generate a new index.html file and generated assets will be added in that file,path to fetch asset depends on publicPath
     *
     * publicPath - http://some-cdn.com/
     * assetPath - http://some-cdn.com/bundle.ed100cf805688c78ea65.js
     *
     * publicPath: '/dist'
     * assetpath - ./dist/bundle.ed100cf805688c78ea65.js
     *
     *  publicPath: "./"
     * assetpath - ./bundle.ed100cf805688c78ea65.js
     *
     * publicPath - not mentioned, 'autovalue'
     * assetpath - bundle.ed100cf805688c78ea65.js (this takes relative path to html, since both are in dist folder)
     *
     *
     * Initially our file was placed outside dist so we ued publicPath as /dist, isnce html file is also inside dist, we need to remove dist from public path
     *
     * all options - https://github.com/jantimon/html-webpack-plugin?tab=readme-ov-file
     */
    new HtmlWebpackPlugin({
      //here we mention some variables that will be used in generated html, full list can be found in github page of package
      // title: "CustomTitle",
      // filename: subfolder / custom_name.html,
      // meta: {
      //   description: "SomeDescription",
      // },
      /**
       * Here we mention a custom handlebar template for generating html
       * options given to Plugin are accssed inside template by - htmlWebpackPlugin.options
       *
       * as we are adding a new type of file , we need to tell webpack how it can load that file, so we add a new rule
       */
      template: "src/index.hbs",
      title: "Hello World",
      description: "Some description",
    }),
  ],
};
