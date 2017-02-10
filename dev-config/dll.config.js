const webpack = require("webpack"),
  path = require("path");

const vendors = [
  "react",
  "react-dom",
  "react-router",
  "lodash",
  "html-entities",
  "sockjs-client",
  "core-js",
  "json3",
  "react-hot-loader",
  "url",
  "regenerator-runtime",
  "react-proxy",
  "redbox-react",
  "url-parse",
  "error-stack-parser",
  "events",
  "debug",
  "style-loader",
  "redux"
];

module.exports = {
  output: {
    path: path.join(__dirname, "/server"),
    filename: "[name].js",
    library: "[name]",
  },
  entry: {
    "vendor": vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "manifest.json"),
      name: "[name]",
      context: path.join(__dirname, "/webpack"),
    }),
  ],
};
