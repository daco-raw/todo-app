const HtmlWebPack    = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
//const CopyPlugin     = require("copy-webpack-plugin");
const path           = require('path');

const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser       = require('terser-webpack-plugin');


module.exports = {
  mode: "production",
  entry: "./src/index",
  output: {
    clean: true,
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: false,
          minimize: false,
        },
      },
      {
        test: /\.css$/i,
        exclude: /styles\.css$/i,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /styles\.css$/,
        use: [MiniCssExtract.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizer(),
      new Terser(),
    ],
  },

  plugins: [
    new HtmlWebPack({
      template: "./src/index.html",
      filename: "./index.html",
      inject: "body",
    }),
    new MiniCssExtract({
      filename: '[name].[fullhash].css', // [fullhash] recomendado para produccion
      ignoreOrder: false
    }),
    /*new CopyPlugin({
      patterns: [
        {from: './src/asset', to: 'asset/'}
      ]
    })*/
  ],
};
