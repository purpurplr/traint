import HtmlWebpackPlugin from 'html-webpack-plugin';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (env) => {
  return {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? undefined : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
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
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
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
