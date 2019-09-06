const path = require('path');

module.exports = {
  entry: './js/src/index.js',
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
    path: path.resolve(__dirname, './js/dist'),
    filename: 'ui-notification.js'
  }
};
