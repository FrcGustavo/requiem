/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import config from '../config';

const { api } = config;

const Post = ({ currentPost, match }) => {
  const [post, setPost] = useState(currentPost);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!post) {
      fetch(`${api}/posts/${match.params.slug}`)
        .then((res) => res.json())
        .then((json) => setPost(json.data))
        .catch(() => setError(true));
    }
  });
  if (error) return <div>Upps algo salio mal</div>;
  if (!post) return <Loading />;
  return (
    <>
      <div className="post">
        <div className="container">
          <section className="post-header">
            <img src={post.cover} alt="" />
          </section>
          <section className="post-title">
            <h1>{post.title}</h1>
          </section>
          <section className="post-conent" dangerouslySetInnerHTML={{ __html: post.post }} />
        </div>
      </div>
      <Footer />
    </>
  );
};

Post.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  currentPost: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  currentPost: state.currentPost,
});

export default connect(mapStateToProps, null)(Post);
