import Blog from '../pages/Blog';
import Post from '../pages/Post';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';

const routes = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/blog', component: Blog },
  { exact: true, path: '/not-found', component: Error404 },
  { exact: true, path: '/:slug', component: Post },
];

export default routes;
