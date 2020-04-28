/* eslint-disable no-console */
import express from 'express';

import MainController from './controllers/MainController';
import BlogController from './controllers/BlogController';

import loadConfigDev from './utils/loadConfigDev';
import loadConfigProd from './utils/loadConfigProd';
import config from './config';

const app = express();

if (config.server.env === 'development') {
  console.log('Load development config');
  loadConfigDev(app);
} else {
  loadConfigProd(app);
}

app.get('/', MainController.index);
app.get('/blog', BlogController.index);
app.get('/not-found', MainController.Error404);
app.get('/:slug', BlogController.show);

app.listen(config.server.port, () => {
  console.log(`Server is listening on http://localhost:${config.server.port}`);
});
