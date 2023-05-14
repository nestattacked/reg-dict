import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';

const common: Configuration = {
  target: 'web',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  entry: {
    index: path.resolve(__dirname, '../src/index.tsx')
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../build'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../html/index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, '../src/asset/favicon.ico'),
      publicPath: '/'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers: () => ({
                before: [createStyledComponentsTransformer()]
              })
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource'
      }
    ]
  }
};

export { common };
