const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry:  __dirname + '/src/index.jsx',
    output: {
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
