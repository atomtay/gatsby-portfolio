import React from "react";
import Layout from "../components/layout";
import opossum from '../images/contact-opossum.png'

const Contact = () => (
  <Layout>
    <main className="contact-layout">
        <img src={opossum}className="contact-img"
        alt="Get in touch!"/>
        <section>
        <h2>Get in touch!</h2>
        <p>
          <strong>Email: </strong><a href="mailto:annabelle.t.taylor@gmail.com">annabelle.t.taylor@gmail.com</a>
        </p>
        <p>
          <strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/atomtay/">linkedin.com/in/atomtay</a>
        </p>
        <p>
          <strong>GitHub: </strong><a href="https://github.com/atomtay">github.com/atomtay</a>
        </p>
        <p>
          <strong>Twitter: </strong><a href="https://twitter.com/_atomtay">@_atomtay</a>
        </p>
        <p>
          <strong>Instagram: </strong><a href="https://www.instagram.com/opossumoprogramming/">@opossumoprogramming</a>
        </p>

        <p><strong>
          <a href="https://github.com/atomtay/gatsby-portfolio/raw/master/resume.pdf" rel="noopener">
            Download my resume (PDF)
          </a></strong>
        </p>
      </section>
    </main>
  </Layout >
);

export default Contact;
