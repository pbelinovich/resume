const configs = require('./configs')
const webpack = require('webpack')
const package = require('./package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const fs = require('fs')
const path = require('path')

// Плагин для создания файла _redirects
class CreateRedirectsPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('CreateRedirectsPlugin', (compilation, callback) => {
      const redirectsContent = '/*    /index.html   200'

      compilation.assets['_redirects'] = {
        source: () => redirectsContent,
        size: () => redirectsContent.length,
      }

      callback()
    })
  }
}

const PORT = process.env.PORT || 8001

module.exports = [
  {
    ...configs.getDefaultConfig({
      entry: './src/index.tsx',
      outputFolder: './dist',
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Pavel Belinovich',
          hash: true,
          template: './src/static-resources/index.html',
          publicPath: '/',
        }),
        new Dotenv({
          path: './.env',
          safe: true,
          allowEmptyValues: true,
          systemvars: true,
          silent: true,
          defaults: false,
        }),
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(package.version),
          'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL || `http://localhost:${PORT}`),
        }),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: './src/static-resources/favicon.ico',
            },
            {
              from: './src/static-resources/images/',
              to: 'images/',
            },
            {
              from: './src/static-resources/resume-ru.pdf',
              to: 'resume-ru.pdf',
              noErrorOnMissing: true,
            },
            {
              from: './src/static-resources/resume-en.pdf',
              to: 'resume-en.pdf',
              noErrorOnMissing: true,
            },
          ],
        }),
        new CreateRedirectsPlugin(),
      ],
    }),
    devServer: {
      host: '0.0.0.0',
      port: PORT,
      historyApiFallback: {
        index: '/index.html', // Указываем, что на все запросы возвращать index.html
      },
      client: {
        overlay: false,
      },
    },
  },
]
