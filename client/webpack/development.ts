import { Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import merge from 'webpack-merge';
import { common } from './common';

const devServer: DevServerConfiguration = {
  port: 8088,
  open: true,
  hot: true,
  historyApiFallback: true
};

const config: Configuration = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer
});

export default config;
