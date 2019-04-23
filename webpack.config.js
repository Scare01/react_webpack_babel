const path = require('path');

module.exports = {
  entry: "./srs/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  }
};