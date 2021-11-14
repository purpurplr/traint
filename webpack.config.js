import HtmlWebpackPlugin from 'html-webpack-plugin';

import path, { dirname } from 'path';
// import webpack from 'webpack';
import { fileURLToPath } from 'url';

const environment = {
  DEV: 'dev',
  PROD: 'prod',
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (env) => {
  const ENV = env.NODE_ENV || environment.DEV;
  const isProd = ENV === environment.PROD;

  return {
    mode: isProd ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          include: [path.resolve(__dirname, 'src', 'web-components')],
          type: 'asset/source',
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
          exclude: [path.resolve(__dirname, 'src', 'web-components')],
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
    },
    resolve: {
      extensions: ['.ts', '.js', '.css'],
    },
    watchOptions: {
      aggregateTimeout: 300,
    },
  };
};
