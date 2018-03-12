const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
    entry: env.NODE_ENV === 'production' ? './src/index.js' : './demo/index.js',
    output: {
      filename: env.NODE_ENV === 'production' ? 'bundle.js' : 'bundle.demo.js',
      path: path.resolve(__dirname, 'lib'),
      library: 'renoori',
      libraryTarget: 'umd'
    },
    mode: env.NODE_ENV,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
              plugins: ['transform-class-properties']
            }
          }
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './demo/index.html'
    })]
});