import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardPost from '../components/CardPost';
import Footer from '../components/Footer';

const Blog = ({ blog }) => {
  const [posts, setPosts] = useState(blog);
  useEffect(() => {
    if (!posts) {
      fetch('http://localhost:8080/api/posts/')
        .then((res) => res.json())
        .then((json) => setPosts(json.data));
    }
  });
  if (!posts) return <div>Cargando</div>;
  const headPost = posts[0];
  return (
    <>
      <div className="blog">
        <div className="card-principle">
          <div className="container">
            <img src={headPost.cover} alt="" />
            <div className="card-info">
              <h1>{headPost.title}</h1>
              <p>{headPost.description}</p>
              <Link className="btn btn-primary" to={headPost.slug}>Leer más</Link>
            </div>
          </div>
        </div>
        <section className="gird-cards">
          <div className="container">
            {
              posts.map((post, idx) => {
                if (idx === 0) return false;
                return <CardPost key={post.slug} post={post} />;
              })
            }
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

Blog.propTypes = {
  blog: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

const mapStateToProps = (state) => (
  {
    blog: state.blog,
  }
);

export default connect(mapStateToProps, null)(Blog);
