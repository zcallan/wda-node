const webpack = require('webpack');

module.exports = {
  devServer: {
    historyApiFallback: true,
    inline: true,
    contentBase: './build',
    port: 3000,
  },
  devtool: 'cheap-module-eval-source-map',
  entry: './client/js/Root.jsx',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.gif$/,
        loader: 'url-loader?mimetype=image/png',
      },
    ],
  },
  output: {
    path: 'build',
    filename: 'js/bundle.min.js',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
};
