import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (env) => {
  return {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? undefined : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader' },
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|ico)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.svg/,
          use: ['preact-svg-loader'],
        },
      ],
    },
    plugins: [
      'analyze' in env && new BundleAnalyzerPlugin(),
      new HtmlWebpackPlugin({ template: './src/index.html', favicon: './src/assets/favicon.ico' }),
    ].filter(Boolean),
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      historyApiFallback: true,
      compress: true,
      port: 9000,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.scss'],
      plugins: [new TsconfigPathsPlugin()],
    },
    watchOptions: {
      aggregateTimeout: 300,
    },
  };
};
