import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";
class Header extends Component {

	render() {
		return (
			<header className="desktop-nav">
				<h1>
					<Link to="/">Annabelle Thomas Taylor</Link>
				</h1>
				<nav>
					<Link to="/">home</Link>
					<Link to="/portfolio">portfolio</Link>
					<Link to="/about">about</Link>
					<Link to="/posts">posts</Link>
					<Link to="/contact">contact</Link>
				</nav>
				<h4>
					Just your average opossum-lovin’, Doc Martens-wearin’, JavaScript-codin’ kind of gal.
				</h4>

			</header>
		);
	}
}

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
