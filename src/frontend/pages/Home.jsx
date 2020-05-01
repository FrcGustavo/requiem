/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Loading from '../components/Loading';
import GithubIcon from '../components/icons/GithubIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';

import { loadHome } from '../actions';
import config from '../config';

const frcgustavo = 'https://firebasestorage.googleapis.com/v0/b/frcgustavo-8b73e.appspot.com/o/frcgustavo.jpg?alt=media&token=bd3682ec-e6f8-4643-9830-9d2d2d665daa';
const Home = (props) => {
  const { mainPost } = props;
  const [post, setPost] = useState(mainPost);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!post) {
      fetch(`${config.api}/posts?limit=1`)
        .then((res) => res.json())
        .then((json) => {
          setPost(json.data.posts[0]);
          props.dispatch(loadHome(json.data.posts[0]));
        })
        .catch(() => setError(true));
    }
  });
  if (error) return <div>Upss Algo salio mal</div>;
  if (!post) return <Loading />;
  return (
    <div className="home">
      <section className="home-info container">
        <div className="home-img">
          <img src={frcgustavo} alt="FrcGustavo" />
        </div>
        <div className="home-info-container">
          <h1>Francisco Gustavo</h1>
          <h2>Desarrollador JavaScript Frontend | Backend</h2>
          <p>Hola yo soy Gustavo y me ecataria que me acompañes en esta aventura de constante aprendisaje</p>
          <div className="icons home-icons">
            <Link to="https://github.com/FranciscoGustavo" target="_blank">
              <GithubIcon />
            </Link>
            <Link to="https://twitter.com/frcgustavo" target="_blank">
              <TwitterIcon />
            </Link>
            <Link to="https://www.linkedin.com/in/frcgustavo/" target="_blank">
              <LinkedinIcon />
            </Link>
          </div>
        </div>
      </section>
      <section className="home-post">
        <article className="card-main-post container">
          <img src={post.cover} alt="" />
          <div className="card-post-info">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <Link to={`/blog/${post.slug}`} className="btn btn-primary">Leer más</Link>
          </div>
        </article>
      </section>
    </div>
  );
};

Home.propTypes = {
  mainPost: PropTypes.any.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  mainPost: state.mainPost,
});

export default connect(mapStateToProps, null)(Home);
