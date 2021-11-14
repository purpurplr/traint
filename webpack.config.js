import HtmlWebpackPlugin from 'html-webpack-plugin';

import path, { dirname } from 'path';
import webpack from 'webpack';
import { fileURLToPath } from 'url';

const environment = {
  DEV: 'dev',
  PROD: 'prod',
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = (env) => {
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
        {
          test: /\/src\/index.ejs$/,
          use: [
            {
              loader: 'render-template-loader',
              options: {
                engine: 'handlebars',
                locals: {
                  title: 'Render Template Loader',
                  desc: 'Rendering templates with a Webpack loader since 2017',
                },
                engineOptions: function (info) {
                  // Ejs wants the template filename for partials rendering.
                  // (Configuring a "views" option can also be done.)
                  return { filename: info.filename };
                },
              },
            },
          ],
        },
      ],

      // rules: [
      //   { test: /\.hbs$/,
      //     use: [
      //       {loader: }
      //     ]
      //
      //     // loader: 'handlebars-loader' },
      //   // {
      //   //   test: /\.ts?$/,
      //   //   use: 'ts-loader',
      //   //   exclude: /node_modules/,
      //   // },
      //   // {
      //   //   test: /\.(ttf|eot|otf)$/,
      //   //   loader: 'file-loader',
      //   //   options: {
      //   //     outputPath: 'assets/fonts',
      //   //     name: isDevelopment ? '[name].[ext]' : '[contenthash].[ext]',
      //   //   },
      //   // },
      //   // {
      //   //   test: /\.(png|svg|jpg|gif)$/,
      //   //   loader: 'file-loader',
      //   //   options: {
      //   //     outputPath: 'assets/images',
      //   //     name: isDevelopment ? '[name].[ext]' : '[contenthash].[ext]',
      //   //   },
      //   // },
      // ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.hbs',
      }),
      // new HtmlWebpackPlugin({ filename: 'index.html', template: './src/index.html' }),
      // new MiniCssExtractPlugin(),
      // new CleanWebpackPlugin(),
      // new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
    // optimization: {
    //   namedModules: isDevelopment,
    //   namedChunks: isDevelopment,
    //   splitChunks: {
    //     hidePathInfo: !isDevelopment,
    //     minSize: isDevelopment ? 10000 : 30000,
    //     maxAsyncRequests: isDevelopment ? Infinity : 5,
    //     maxInitialRequests: isDevelopment ? Infinity : 3,
    //   },
    //   minimize: !isDevelopment,
    //   minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})],
    //   noEmitOnErrors: !isDevelopment,
    // },
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

export default config;
