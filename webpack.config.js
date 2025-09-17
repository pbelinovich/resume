const configs = require('./configs')
const webpack = require('webpack')
const package = require('./package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = [
  {
    ...configs.getDefaultConfig({
      entry: './src/index.tsx',
      outputFolder: './dist',
      plugins: [
        new HtmlWebpackPlugin({
          title: "Pavel Belinovich's Resume",
          hash: true,
          template: './src/static-resources/index.html',
          publicPath: '/',
        }),
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(package.version),
        }),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: './src/static-resources/favicon.ico',
            },
          ],
        }),
      ],
    }),
    devServer: {
      host: '0.0.0.0',
      port: 8001,
      historyApiFallback: {
        index: '/index.html', // Указываем, что на все запросы возвращать index.html
      },
      client: {
        overlay: false,
      },
    },
  },
]
