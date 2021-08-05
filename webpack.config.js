const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    baseline: "./script/1-baseline.js",
    "mysql-single-row": "./script/2-mysql-single-row.js",
    "mongo-big-row": "./script/3-mongo-big-row.js",
    "mongo-single-row": "./script/4-mongo-single-row.js",
    "redis-big-row": "./script/5-redis-big-row.js",
    "redis-single-row": "./script/6-redis-single-row.js",
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
