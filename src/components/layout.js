import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import MobileHeader from './MobileHeader'
import "./reset.css";
import "./layout.css";
import { Helmet } from "react-helmet"
import favicon from './favicon.ico'


const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<div id="outer-container" >
				<Helmet
					link={[
						{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
					]}>
					<meta charSet="utf-8" />
					<title>Hi, I'm Annabelle!</title>
					<link rel="canonical" href="https://www.atomtay.com" />
					<link key="icon" rel="icon" href={favicon} />
				</Helmet>
				<Header />
				<MobileHeader />

				{children}
			</div>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;