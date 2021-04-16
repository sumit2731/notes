const path = require("path");
/**
 * This is npm package(clean-webpack-plugin) that we have downloaded
 */
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  /**
   * Mode is set to production. This will tell webpack to do optimizations or minify our code
   * and so on.
   */
  mode: "production",
  entry: "./src/app.ts",
  output: {
    /* 
        *This is a single output file, you can also add dynamic parts here
        for example contentHash to tell webpack to automatically create unique
        hash for every build which can help you with caching in browser you can learn
        more about it in webpack docs
        */
    // filename: 'bundle.[contenthash].js',
    filename: "bundle.js",
    /**
     * This is path here outout should be written to. but here we need absolute
     * path.
     */
    path: path.resolve(__dirname, "dist"),
    /**
     *This was only needed for webpack-dev-server, we dnt need it here
     */
    //publicPath: "dist",
  },
  /**
   * WE do not need any source maps here
   */
  devtool: "none",
  module: {
    rules: [{ test: /\.ts/, use: "ts-loader", exclude: /node_modules/ }],
  },
  /**
   * here we tell webpack which file extensions it adds to impports. by default
   * it will look fot js files. here w ewant webpack to look for .ts files. here
   * we tell it that it should look for .ts as well as .ts files. now webpack will
   * basically look for such files and then bundle all files that have these
   * extensions which you are importing
   */
  resolve: {
    extensions: [".ts", ".js"],
  },
  /**
   * Plugins are extra exetensions that you can apply to your webpack
   * workflow which will basically be applied to entire output, to entire project.
   * rule and modules specifically are applied on per file level.plug ins are applied to
   * general workflow.
   *
   * Here I want to apply a plugin which automatically deletes everything in disk folder
   * before a new output is written there. so we installed clean-webpack-plugin package.
   *
   */
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};
