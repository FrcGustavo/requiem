import PostsServices from '../services/PostsServices';
import initialState from '../initialState';
import renderApp from '../utils/renderApp';

class BlogController {
  constructor() {
    this.posts = new PostsServices();
    this.index = this.index.bind(this);
    this.show = this.show.bind(this);
  }

  async index(req, res, next) {
    const { limit, sort, page } = req.query;
    try {
      const posts = await this.posts.find({ limit, sort, page });
      const state = { ...initialState, blog: posts };
      const html = renderApp(state, req.url, req.hashManifest, {
        title: 'FrcGustavo | Blog',
        description: 'Hola yo soy gustavo y en este blog encontraras',
        keywords: 'FrcGustavo',
      });
      res.send(html);
    } catch (error) {
      next(error);
    }
  }

  async show(req, res, next) {
    const { slug } = req.params;
    try {
      const post = await this.posts.show(slug);
      const state = { ...initialState, currentPost: post };
      const html = renderApp(state, req.url, req.hashManifest, {
        title: post.title,
        description: post.description,
        keywords: post.keywords,
      });
      res.send(html);
    } catch (error) {
      next(error);
    }
  }
}

export default new BlogController();
