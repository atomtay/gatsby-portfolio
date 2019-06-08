import React, { Component } from "react";
import Layout from "../components/layout";

class contact extends Component {
	render() {
		return (
			<Layout>
				<main className="contact-layout">
					<img
						src="https://www.annabelle-t-taylor.com/wp-content/uploads/2019/04/IMG_0453-removebg-1.png"
						className="contact-img"
						alt="Get in touch!"
					/>
					<section>
						<h2>Get in touch!</h2>
						<p>
							<strong>Email</strong>
							<br /><a href="mailto:annabelle.t.taylor@gmail.com">
								annabelle.t.taylor@gmail.com</a>
						</p>
						<p>
							<strong>LinkedIn</strong>
							<br /><a href="https://www.linkedin.com/in/atomtay/">
								linkedin.com/in/atomtay</a>
						</p>
						<p>
							<strong>Twitter</strong>
							<br /><a href="https://twitter.com/_atomtay">
								@_atomtay</a>
						</p>
						<p>
							<strong>Instagram</strong>
							<a href="https://www.instagram.com/opossumoprogramming/">
								<br />@opossumoprogramming</a>
						</p>

						<p className="resume-link">
							<a href="http://www.annabelle-t-taylor.com/wp-content/uploads/2019/05/Annabelle-Taylor-resume.pdf" target="_blank" rel="noopener">
								<center>Download my resume (PDF)</center>
							</a>
						</p>
					</section>
				</main>
			</Layout >
		);
	}
}

export default contact;
