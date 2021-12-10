const HtmlWebPack    = require("html-webpack-plugin");
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin     = require("copy-webpack-plugin");
const path           = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    clean: true,
    path: path.resolve(__dirname, "./dist"),
    filename: "main_bundle.js",
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
      }
    ],
  },
  plugins: [
    new HtmlWebPack({
      template: "./src/index.html",
      filename: "./index.html",
      inject: "body",
    }),
    new MiniCssExtract({
      filename: '[name].css', // [fullhash] recomendado para produccion
      ignoreOrder: false
    }),
    new CopyPlugin({
      patterns: [
        {from: './src/asset', to: 'asset/'}
      ]
    })
  ],
};
