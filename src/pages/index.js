import React, { Component } from "react";
import Header from '../components/header';
import MobileHeader from '../components/MobileHeader'
import '../components/layout.css'
import { Helmet } from "react-helmet"
import favicon from '../components/favicon.ico'
import logo from '../images/portrait-hd-smaller.png'

class index extends Component {
	render() {
		return (
			<div>
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
				<main style={{ marginBottom: 0 }}>
					<img
						src={logo}
						className="index-portrait"
						alt="Annabelle Thomas Taylor"
					/>
				</main>
			</div>
		);
	}
}

export default index;
