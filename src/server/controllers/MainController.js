import PostsServices from '../services/PostsServices';
import initialState from '../initialState';
import renderApp from '../utils/renderApp';

const posts = new PostsServices();

const index = async (req, res, next) => {
  try {
    const post = await posts.find({ limit: 1 });
    const state = { ...initialState, mainPost: post[0] };
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
