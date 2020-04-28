import fetch from 'node-fetch';
import initialState from '../initialState';
import renderApp from '../utils/renderApp';
import config from '../config';

const index = async (req, res, next) => {
  try {
    const api = await (await fetch(`${config.apiUrl}/posts`)).json();
    const state = { ...initialState, blog: api.data };
    const html = renderApp(state, req.url, req.hasManifest, {
      title: 'FrcGustavo | Blog',
      description: 'Hola yo soy gustavo y en este blog encontraras',
      keywords: 'FrcGustavo',
    });
    res.send(html);
  } catch (error) {
    next(error);
  }
};

const show = async (req, res, next) => {
  const { slug } = req.params;
  try {
    const api = await fetch(`${config.apiUrl}/posts/${slug}`);
    if (api.status === 200) {
      const dataJSON = await api.json();
      const state = { ...initialState, currentPost: dataJSON.data };
      const html = renderApp(state, req.url, req.hasManifest, {
        title: dataJSON.data.title,
        description: dataJSON.data.description,
        keywords: '',
      });
      res.send(html);
    }
    res.redirect('/not-found');
  } catch (error) {
    next(error);
  }
};

export default {
  index,
  show,
};
