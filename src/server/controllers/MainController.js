import fetch from 'node-fetch';
import initialState from '../initialState';
import renderApp from '../utils/renderApp';
import config from '../config';

const index = async (req, res, next) => {
  try {
    const api = await (await fetch(`${config.apiUrl}/posts?limit=1`)).json();
    const state = { ...initialState, mainPost: api.data[0] };
    const html = renderApp(state, req.url, req.hasManifest, {
      title: 'FrcGustavo',
      description: 'Hola soy Gustavo, desarrollador con JavaScript, me gusta aprender cosas nuevas todos los dias',
      keywords: 'FrcGustavo, Blog, Desarrollador, JavaScript, Frontend, Backend',
    });
    res.send(html);
  } catch (error) {
    next(error);
  }
};

const Error404 = async (req, res) => {
  const state = { ...initialState };
  const html = renderApp(state, req.url, req.hasManifest, {
    title: 'Not Found',
    description: '',
    keywords: '',
  });
  res.status(404).send(html);
};

export default {
  index,
  Error404,
};
