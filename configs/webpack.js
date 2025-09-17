/*eslint-env node*/

const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const fs = require('fs')

const getEnv = () => (process.env.NODE_ENV || 'production').toLowerCase()

// META_MODE values: none all only_map only_dts
const getMetaMode = () => (process.env.META_MODE || 'none').toLowerCase()
const dictionariesPath = path.resolve(__dirname, '../../../../dictionaries')

const getCheckTsMode = () => (process.env.CHECK_TS_MODE || 'on').toLowerCase()

const getDefaultConfig = (options = {}) => {
  const env = options.env || getEnv()
  if (env !== 'production' && env !== 'development') {
    throw new Error(`Unknown env ${env}`)
  }

  const genDts = getMetaMode() === 'all' || getMetaMode() === 'only_dts'
  const genMap = getMetaMode() === 'all' || getMetaMode() === 'only_map'

  const target = options.target === undefined ? 'web' : options.target
  const buildForReactNative = options.buildForReactNative === undefined ? false : options.buildForReactNative
  const externals = options.externals
  const plugins = options.plugins || []
  // Если в node_modules, сделай три шага вверх из node_modules/@platform/tools
  const entry = path.resolve(
    __dirname,
    (__dirname.indexOf('node_modules') !== -1 ? '../../../../' : __dirname.indexOf('configs') !== -1 ? '../' : '') +
      (options.entry || 'src/index.tsx')
  )
  const distFolder = options.outputFolder || './dist'
  const allowTsInNodeModules = options.allowTsInNodeModules || false
  const generateDts = options.generateDts === undefined ? genDts : options.generateDts
  const libraryTarget = options.libraryTarget || (buildForReactNative ? 'commonjs2' : 'umd')
  const useBabelFor = options.useBabelFor || ''
  const pathToBabelConfig = options.pathToBabelConfig || path.resolve(__dirname, './babel.config.js')
  const outputJsFileName = options.outputJsFileName || 'index.js'
  const dictionariesOutputPath = options.dictionariesOutputPath || './'

  const babelConfig = require(pathToBabelConfig)

  const cleanWebpackPluginOptions = options.cleanWebpackPluginOptions

  const rules = [
    {
      test: /\.tsx?$/,
      use: {
        loader: `ts-loader?allowTsInNodeModules=${allowTsInNodeModules}`,
        options: {
          transpileOnly: !generateDts,
          onlyCompileBundledFiles: true,
          compilerOptions: {
            outDir: path.resolve(distFolder, './declarations'),
          },
        },
      },
    },
  ]

  if (useBabelFor) {
    rules.push({
      test: useBabelFor,
      use: [
        {
          loader: 'babel-loader',
          options: babelConfig,
        },
      ],
    })
  }

  // CSS и SCSS правила
  rules.push({
    test: /\.css$/,
    exclude: /static-resources|fonts|inter/,
    use: [
      env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
      },
    ],
  })

  // Глобальные CSS файлы (шрифты и т.д.)
  rules.push({
    test: /\.css$/,
    include: /static-resources|fonts|inter/,
    use: [env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
  })

  rules.push({
    test: /\.scss$/,
    use: [
      env === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
      '@teamsupercell/typings-for-css-modules-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  })

  // Правило для файлов шрифтов
  rules.push({
    test: /\.(woff|woff2|ttf|eot)$/,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[name][ext]',
    },
  })

  // Правило для SVG файлов как React компонентов
  rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })

  // Правило для изображений
  rules.push({
    test: /\.(png|jpe?g|gif|ico)$/,
    type: 'asset/resource',
    generator: {
      filename: 'images/[name].[hash][ext]',
    },
  })

  return {
    mode: env,
    entry,
    target,
    externals: [
      ...(Array.isArray(externals) ? externals : externals ? [externals] : []),

      // что это и зачем смотри в разделе Работа с ресурсными файлами для react-native в README.md
      function (_, request, callback) {
        if (/^.*__external$/.test(request)) {
          return callback(null, request.replace('__external', ''))
        }
        callback()
      },
    ],
    output: {
      filename: outputJsFileName,
      path: path.resolve(distFolder),
      assetModuleFilename: 'resources/[hash][ext][query]',
      globalObject: 'this',
      library: options.module
        ? {
            type: libraryTarget,
            // name: libraryTarget === 'umd' ? undefined : options.module,
            // umdNamedDefine: true,
          }
        : undefined,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      modules: ['src', 'node_modules'],
    },
    module: {
      rules,
    },
    devtool: genMap ? 'source-map' : false,
    snapshot: {
      immutablePaths: [],
      managedPaths: [],
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    },
    plugins: [
      new CleanWebpackPlugin(cleanWebpackPluginOptions),
      ...(generateDts || getCheckTsMode() === 'off' ? [] : [new ForkTsCheckerWebpackPlugin()]),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        // add errors to webpack instead of warnings
        failOnError: true,
        // set the current working directory for displaying module paths
        cwd: process.cwd(),
      }),
      ...(env === 'production'
        ? [
            new MiniCssExtractPlugin({
              filename: 'css/[name].[contenthash].css',
            }),
          ]
        : []),
      ...(fs.existsSync(dictionariesPath)
        ? [new CopyWebpackPlugin({ patterns: [{ from: dictionariesPath, to: dictionariesOutputPath }] })]
        : []),
      ...plugins,
    ],
  }
}

module.exports = {
  getDefaultConfig,
  getEnv,
}
