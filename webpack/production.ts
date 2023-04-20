import { type Configuration } from 'webpack';
import merge from 'webpack-merge';
import { common } from './common';

const config: Configuration = merge(common, {
  mode: 'production'
});

export default config;
