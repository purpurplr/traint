const environment = {
  DEV: 'dev',
  PROD: 'prod',
};

import HtmlWebpackPlugin from 'html-webpack-plugin';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  const ENV = env.NODE_ENV || environment.DEV;
  const isDevelopment = ENV === environment.DEV;

  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        // {
        //   test: /\.ts?$/,
        //   use: 'ts-loader',
        //   exclude: /node_modules/,
        // },
        // {
        //   test: /\.(ttf|eot|otf)$/,
        //   loader: 'file-loader',
        //   options: {
        //     outputPath: 'assets/fonts',
        //     name: isDevelopment ? '[name].[ext]' : '[contenthash].[ext]',
        //   },
        // },
        // {
        //   test: /\.(png|svg|jpg|gif)$/,
        //   loader: 'file-loader',
        //   options: {
        //     outputPath: 'assets/images',
        //     name: isDevelopment ? '[name].[ext]' : '[contenthash].[ext]',
        //   },
        // },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Index template',
        template: path.resolve(__dirname, 'src', 'index.html'),
      }),

      new HtmlWebpackPlugin({ filename: 'index.html', template: './src/index.html' }),
      new MiniCssExtractPlugin(),
      new CleanWebpackPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
    optimization: {
      namedModules: isDevelopment,
      namedChunks: isDevelopment,
      splitChunks: {
        hidePathInfo: !isDevelopment,
        minSize: isDevelopment ? 10000 : 30000,
        maxAsyncRequests: isDevelopment ? Infinity : 5,
        maxInitialRequests: isDevelopment ? Infinity : 3,
      },
      minimize: !isDevelopment,
      minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})],
      noEmitOnErrors: !isDevelopment,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.scss', '*'],
    },
    devtool: isDevelopment ? 'source-map' : 'null',
    watch: isDevelopment,
    watchOptions: {
      aggregateTimeout: 300,
    },
  };
};
