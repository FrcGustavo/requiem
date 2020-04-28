import express from 'express';
import helmet from 'helmet';
import getManifest from '../getManifest';

const loadConfigProd = (app) => {
  app.use((req, res, next) => {
    if (!req.hashManifest) {
      req.hashManifest = getManifest();
    }
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
};

export default loadConfigProd;
