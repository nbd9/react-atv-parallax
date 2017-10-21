const path = require('path')
const webpack = require('webpack')
const copywebpackplugin = require('copy-webpack-plugin')

let config = {}

if (process.env.NODE_ENV === 'production') {
  config = {
    devtool: 'source-map',
    entry: [
      './example/src'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        minimize: true,
        compress: { warnings: false },
        comments: false
      }),
      new copywebpackplugin([
        { from: './example/static/' }
      ])
    ]
  }
}

module.exports = Object.assign({}, {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './example/src'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    alias: {
      'react-atv-parallax': path.join(__dirname, 'src')
    },
    extensions: ['.js']
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    }]
  }
}, config)
