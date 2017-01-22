import React from 'react';
import AppBar from './Navbar';
// import Footer from './Footer';

// { console.log(children)}
const Root = ({ children }) => (
  <div>
    <AppBar />
    { children }
  </div>
);

export default Root;
