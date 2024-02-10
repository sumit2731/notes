/**
 * Weusing the old way of importing modules -common js, because inside the configuration
    file we can't use script modules.It was always like that and it's still the case in Webpack five.
 */

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    /**
     * __dirname - returns the current path i.e path at which current file is loacated at(without path name)
     * path.resolve can resolve this with any absolute or relative path that you provide
     */
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "none",
};
