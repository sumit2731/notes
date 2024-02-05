const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    //path: "/dist",
    // /Users/sumeet.sood/notes/Lectures/Webpack5/1_CompleteGuideForBeginers/TUTORIAL/dist
    path: path.resolve(__dirname, "./dist"),
    /**
     * this is path where assets are copied.
     * link - https://www.udemy.com/course/webpack-from-beginner-to-advanced/learn/lecture/10919184#questions/18804866
     *
     * all identifiers which can be used in chunk name - https://webpack.js.org/configuration/output/#outputfilename
     */
    // assetModuleFilename: "[path]/[name][hash][ext]",
    /**
     * This is path from which images imported in js code will be fetched.
     * js ,css and fonts assets in css will be fetched from
     *
     *
     * With webpack 5, 'auto' is default value of publicPath. auto means folder where our final bundle is placed. In code src(result when we import a image) will be -
     * http://127.0.0.1:5500/code/dist/NameOfAsset
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
    //publicPath : 'auto' , //imagePath - http://127.0.0.1:5500/3_AssetModules/code/dist/23de234a71129d9c860b.jpg
    //publicPath: "http://127.0.0.1:5500/code/dist/", //imagePath - http://127.0.0.1:5500/code/dist/23de234a71129d9c860b.jpg
    // publicPath: '/Users/sumeet.sood/notes/Lectures/Webpack5/1_CompleteGuideForBeginers/code/dist/23de234a71129d9c860b.jpg'
    // publicPath: "/Users/sumeet.sood/notes/Lectures/Webpack5/1_CompleteGuideForBeginers/code/dist/",
    //publicPath: "http://some-cdn.com/", //imagePath - http://some-cdn.com/23de234a71129d9c860b.jpg
    //publicPath: "dist/", // or './dist/'
  },
  mode: "none",
  module: {
    /**
     * each rule has atleast 2 properties
     *  'test' - this regular expressions which is used to match files
     *  type or use - asset modules need 'type' property, 'use' is for loaders
     *    type accepts 4 values as shown in figure1 of section 3.
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
        test: /\.(txt)$/,
        type: "asset/source",
      },
    ],
  },
};
