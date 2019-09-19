const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    library: 'UiNotifcation',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist'),
    filename: 'ui-notification.js'
  }
};
