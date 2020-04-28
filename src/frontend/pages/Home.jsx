/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import GithubIcon from '../components/icons/GithubIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import config from '../config';

const frcgustavo = 'https://firebasestorage.googleapis.com/v0/b/frcgustavo-849f3.appspot.com/o/me.png?alt=media&token=898a5729-4489-4ecc-b8fb-7079edcf9a98';
const Home = ({ mainPost }) => {
  const [post, setPost] = useState(mainPost);
  useEffect(() => {
    if (!post) {
      fetch(`${config.api}/posts?limit=1`)
        .then((res) => res.json())
        .then((json) => setPost(json.data[0]));
    }
  });
  if (!post) return <div>Cargando</div>;
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
            <GithubIcon />
            <TwitterIcon />
            <LinkedinIcon />
          </div>
        </div>
      </section>
      <section className="home-post">
        <article className="card-main-post container">
          <img src={post.cover} alt="" />
          <div className="card-post-info">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <Link to={post.slug} className="btn btn-primary">Leer más</Link>
          </div>
        </article>
      </section>
    </div>
  );
};

Home.propTypes = {
  mainPost: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  mainPost: state.mainPost,
});

export default connect(mapStateToProps, null)(Home);
