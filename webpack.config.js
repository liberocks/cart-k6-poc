const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    "mysql-single-row": "./script/1-mysql-single-row.js",
    "mysql-multi-row": "./script/2-mysql-multi-row.js",
    "mongo-single-row": "./script/3-mongo-single-row.js",
    "mongo-multi-row": "./script/4-mongo-multi-row.js",
    "redis-single-row": "./script/5-redis-single-row.js",
    "redis-multi-row": "./script/6-redis-multi-row.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs",
    filename: "[name].bundle.js",
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }],
  },
  target: "web",
  externals: {
    k6: "k6",
    "k6/x/sql": "k6/x/sql",
  },
};
