/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
  </>
);

export default Layout;
