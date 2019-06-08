import React, { Component } from "react";
import Layout from "../components/layout";
import portfolio from '../images/portfolio.jpg'
import deathByData from '../images/deathbydata.jpg'
import petz from '../images/petz-screencap.png'
import sororitree from '../images/sororitree.png'
import valentine from '../images/npm.png'
import whatthefont from '../images/whatthefont.png'
import PortfolioEntry from '../components/PortfolioEntry'

class about extends Component {
    render() {
        return (
            <Layout>
                <main>
                <PortfolioEntry 
                        title="atomtay.com"
                        image={portfolio}
                        date="June 2019"
                        description="More properly, this is a revamp of my old portfolio website. Once upon a time, I hosted my portfolio under a different domain and displayed my content with a WordPress theme I found by happenstance. In order to more properly align with my branding, I redesigned the site layout in GatsbyJS and cut out the WordPress middleman entirely. I am now happily hosted by Netlify (and saving dozens of dollars to boot)."
                        siteLink="https://www.atomtay.com"
                        repo="https://github.com/atomtay/gatsby-portfolio"
                    />
                    <PortfolioEntry 
                        title="A Death by the Data"
                        image={deathByData}
                        date="April 2019"
                        description="A data visualization presented with Django-Chartjs and powered with an ElephantSQL PostgreSQL database. I started with a Kaggle data set examining character death times throughout George R. R. Martin’s A Song of Ice and Fire series and, through my own research, classified manner of death and updated character nobility stats. From there, I normalized my database into third normal form and uploaded my data from CSV files. Line and bar charts then allow the user to explore the relationship between death, socioeconomic class, and gender in Westeros."
                        siteLink="http://asoiaf-data.herokuapp.com/"
                        repo="https://github.com/atomtay/asoiaf-data"
                    />

                    <PortfolioEntry 
                        title="Petz"
                        image={petz}
                        date="March 2019"
                        description="A full-stack CRUD application written with the MERN stack. I collaborated in daily scrum sessions with Cathy Le and Wesley Scholl (Konjo) to divide tasks in a feature-branching Git workflow. In particular, I built the search functionality by iterating over an array of Pet objects looking for matching substring matches. Additionally, I was responsible for writing much of the backend API and eventually launching it to Heroku."
                        siteLink="http://petz-frontend.surge.sh/"
                        repo="https://github.com/atomtay/project3frontend"
                    />

                    <PortfolioEntry 
                        title="Sororitree"
                        image={sororitree}
                        date="March 2019"
                        description="A full-stack CRUD application written with the MERN stack. I collaborated in daily scrum sessions with Cathy Le and Wesley Scholl (Konjo) to divide tasks in a feature-branching Git workflow. In particular, I built the search functionality by iterating over an array of Pet objects looking for matching substring matches. Additionally, I was responsible for writing much of the backend API and eventually launching it to Heroku."
                        siteLink="https://sororitree.herokuapp.com/"
                        repo="https://github.com/atomtay/sororitree"
                    />

                    <PortfolioEntry 
                        title="Valentine Generator"
                        image={valentine}
                        date="February 2019"
                        description="An npm package built with Express to randomly generate valentines. Admittedly, this little app came about when I realized that Valentine’s Day was two days away and I had not planned anything for my partner, Sam. He is also a software engineer, so I wanted to make something to show him how much I had learned just four weeks into my web development immersive program. The app simply generates a couple of random numbers to reference two arrays: one with pictures of us and another with terrible math and computer science pick-up lines. Valentine cards ensue."
                        siteLink="https://www.npmjs.com/package/for-sam-2019"
                        repo="https://github.com/atomtay/valentine-generator"
                    />

                    <PortfolioEntry 
                        title="What the F*NT?!"
                        image={whatthefont}
                        date="February 2019"
                        description="An npm package built with Express to randomly generate valentines. Admittedly, this little app came about when I realized that Valentine’s Day was two days away and I had not planned anything for my partner, Sam. He is also a software engineer, so I wanted to make something to show him how much I had learned just four weeks into my web development immersive program. The app simply generates a couple of random numbers to reference two arrays: one with pictures of us and another with terrible math and computer science pick-up lines. Valentine cards ensue."
                        siteLink="https://atomtay.github.io/what-the-font/"
                        repo="https://github.com/atomtay/what-the-font"
                    />
                </main>
            </Layout >
        );
    }
}

export default about;
