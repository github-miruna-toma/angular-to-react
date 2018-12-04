const webpack = require('webpack');

module.exports = {
  entry: {
    itemsList: './react-components/items-list/index.js',
    dashboard: './react-components/items-list/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(ts|tsx)?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  output: {
      path: __dirname + '/dist',
      filename: `[name].bundle.js`,
      publicPath: '/'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};