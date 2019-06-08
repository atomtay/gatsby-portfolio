import React, { Component } from "react";
import Layout from "../components/layout";

class about extends Component {
    render() {
        return (
            <Layout>
                <main className="about-layout">
                    <img
                        src="https://www.annabelle-t-taylor.com/wp-content/uploads/2019/04/GA_March-150-9623.png"
                        className="about-portrait"
                        alt="Hi, I'm Annabelle!"
                    />
                    <section>
                        <h2>Nice to meet you!</h2>
                        <p>
                            My name is Annabelle, and I'm a software engineer, attempted writer, and all-around decent human being. My interest in website design began at the ripe old age of eight when I realized that neopets.com, the gravitational center of my universe, was actually created by a human. Truly, a groundbreaking revelation. If professional, adult developers could do it, so could a bored third grader! I would like to think that my aesthetic and abilities have improved since the days of HTML4. Hopefully.
                        </p>
                        <p>When I'm not in front of a computer, I'm almost always immersed in music in one form or another. I play the bassoon and baritone ukulele, but I'm also known to listen to anything with "Original Broadway Cast" in the name or banjos in the ensemble. I am also a big fan of talking baby talk to animals: the smaller and fluffier, the better.</p>
                    </section>
                </main>
            </Layout >
        );
    }
}

export default about;
