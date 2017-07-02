var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.css']
  },
  plugins: [
    new ExtractTextPlugin("app.css")
  ]
};