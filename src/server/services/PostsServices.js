import showdown from 'showdown';
import MongoLib from '../databases/mongo';

class PostsServices {
  constructor() {
    this.posts = new MongoLib();
    this.converter = new showdown.Converter();
  }

  async find(query) {
    const limit = Number(query.limit) || 10;
    const sort = String(query.sort) || '-_id';
    const skip = (Number(query.page || 1) - 1) * 9;
    const posts = await this.posts.findAll('posts', { limit, sort, skip });
    const clearPosts = posts.map(({
      title, description, cover, slug,
    }) => ({
      title, description, cover, slug,
    }));
    return clearPosts;
  }

  async show(slug) {
    const post = await this.posts.findBySlug('posts', slug);
    post.post = this.converter.makeHtml(post.post);
    return post;
  }
}

export default PostsServices;
