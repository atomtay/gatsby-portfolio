import React from "react";
import { Link } from "gatsby";

const Header = () => (
  <header className="desktop-nav">
    <h1>
      <Link to="/">Annabelle Thomas Taylor</Link>
    </h1>
    <nav>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/posts">posts</Link>
      <Link to="/contact">contact</Link>
    </nav>
    <h4>
      Just your average opossum-lovin’, Doc Martens-wearin’, JavaScript-codin’ kind of gal.
    </h4>
  </header>
);

export default Header;
