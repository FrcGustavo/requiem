import React from 'react';
import GithubIcon from './icons/GithubIcon';
import TwitterIcon from './icons/TwitterIcon';
import LinkedinIcon from './icons/LinkedinIcon';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="social-media">
        <h4>Redes Sociales</h4>
        <div className="icons">
          <GithubIcon />
          <TwitterIcon />
          <LinkedinIcon />
        </div>
      </div>
      <div className="posts">
        <h4>Blog</h4>
      </div>
    </div>
  </footer>
);

export default Footer;
