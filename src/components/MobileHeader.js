import React from "react";
import { Link } from "gatsby";
import { slide as Menu } from 'react-burger-menu'
const MobileHeader = () => (
  <header className="mobile-nav">
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <Link to="/" className="menu-item">home</Link>
        <Link to="/about" className="menu-item">about</Link>
        <Link to="/posts" className="menu-item">posts</Link>
        <Link to="/contact" className="menu-item">contact</Link>
      </Menu>
      <h1>
        <Link to="/">Annabelle Thomas Taylor</Link>
      </h1>
      <h4>
        Just your average opossum-lovin’, Doc Martens-wearin’, JavaScript-codin’ kind of gal.
      </h4>
  </header >
);

export default MobileHeader;
