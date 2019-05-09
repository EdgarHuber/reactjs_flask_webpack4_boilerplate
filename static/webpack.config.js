const webpack = require('webpack');
const resolve = require('path').resolve;
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//config output of bundle to public/
const config = {
    entry:  __dirname + '/src/index.jsx',
    output: {
        //path: __dirname + '/public',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: "file-loader?name=/public/images/[name].[ext]",
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader",
          })
  }
      ]
    },
    plugins: [
      new ExtractTextPlugin('/public/css/style.css')
    ]
};

module.exports = config;
