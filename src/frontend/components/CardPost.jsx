import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardPost = ({ post }) => (
  <article className="card-post">
    <img src={post.cover} alt="" />
    <div className="card-info">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <Link className="btn btn-primary" to={`/${post.slug}`}>Leer más</Link>
    </div>
  </article>
);

CardPost.propTypes = {
  post: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardPost;
