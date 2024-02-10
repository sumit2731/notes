module.exports = {
  module: {
    generator: {
      asset: {
        // Generator options for asset modules

        // The options for data url generator.
        dataUrl: {
          // Asset encoding (defaults to "base64")
          // type: 'base64' | false
          encoding: "base64",
          // Asset mimetype (getting from file extension by default).
          // type: string
          mimetype: "image/png",
        },

        // Emit an output asset from this asset module. This can be set to 'false' to omit emitting e. g. for SSR.
        // type: boolean
        emit: true,

        // Customize filename for this asset module
        // type: string | ((pathData: PathData, assetInfo?: AssetInfo) => string)
        filename: "static/[path][name][ext]",

        // Customize publicPath for asset modules, available since webpack 5.28.0
        // type: string | ((pathData: PathData, assetInfo?: AssetInfo) => string)
        publicPath: "https://cdn/assets/",

        // Emit the asset in the specified folder relative to 'output.path', available since webpack 5.67.0
        // type: string | ((pathData: PathData, assetInfo?: AssetInfo) => string)
        outputPath: "cdn-assets/",
      },
      "asset/inline": {
        // Generator options for asset/inline modules

        // The options for data url generator.
        dataUrl: {
          // Asset encoding (defaults to "base64")
          // type: 'base64' | false
          encoding: "base64",
          // Asset mimetype (getting from file extension by default).
          // type: string
          mimetype: "image/png",
        },
      },
      "asset/resource": {
        // Generator options for asset/resource modules

        // Emit an output asset from this asset module. This can be set to 'false' to omit emitting e. g. for SSR.
        // type: boolean
        emit: true,

        // Customize filename for this asset module
        // type: string | ((pathData: PathData, assetInfo?: AssetInfo) => string)
        filename: "static/[path][name][ext]",

        // Customize publicPath for asset/resource modules, available since webpack 5.28.0
        // type: string | ((pathData: PathData, assetInfo?: AssetInfo) => string)
        publicPath: "https://cdn/assets/",

        // Emit the asset in the specified folder relative to 'output.path', available since webpack 5.67.0
        // type: string | ((pathData: PathData, assetInfo?: AssetInfo) => string)
        outputPath: "cdn-assets/",
      },
      javascript: {
        // No generator options are supported for this module type yet
      },
      "javascript/auto": {
        // ditto
      },
      "javascript/dynamic": {
        // ditto
      },
      "javascript/esm": {
        // ditto
      },
      css: {
        // Generator options for css modules

        // Avoid generating and loading a stylesheet and only embed exports from css into output javascript files.
        // type: boolean, available since webpack 5.90.0
        exportsOnly: true,
      },
      "css/auto": {
        // ditto
      },
      "css/global": {
        // ditto
      },
      "css/module": {
        // ditto
      },
      // others…
    },
  },
};
