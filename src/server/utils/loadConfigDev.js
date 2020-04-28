/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import webpack from 'webpack';
import config from '../config';

const loadConfigDev = (app) => {
  const webpackConfig = require('../../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const webpackServerConfig = {
    port: config.server.port,
    hot: true,
  };
  app.use(webpackDevMiddleware(compiler, webpackServerConfig));
  app.use(webpackHotMiddleware(compiler));
};

export default loadConfigDev;
