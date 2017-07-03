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
        loader: 'babel-loader'
      },
      { 
        test: /\.less/, 
        loader: 'style-loader!css-loader!less-loader' 
      },
      { 
        test: /\.(woff2|woff|ttf|svg|eot)$/, 
        loader: 'file-loader' 
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.css']
  },
  plugins: [
    new ExtractTextPlugin("app.css")
  ]
};