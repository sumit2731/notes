const path = require('path');
/**
 * @This files uses java script and it actually node js features
 * we use nodejs export syntax, to export a js object which will be
 * configuration object picked up by webpack
 */
module.exports = {
  mode: "development",
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
     * this is neede for webpack-dev-server to really understand where output is written to and where 
     * it is relative to index.html file because by default webpack will server index.html file which is at path
     * where we have package.json, but it cannot make connection to dist folder correctly, that is why we have to
     *  inform webpack-dev-server with public path, where to find our assets, so our bundle.js file in this case.
     */
    publicPath: "dist",
  },
  /**
   * This tells webpack that there will be generated source maps already
   * which it should  extract and basically wire up correctly to bundle it
   * generates
   */
  devtool: "eval-source-map",
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
};
