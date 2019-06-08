import React, { Component } from "react";
import Layout from "../components/layout";

class posts extends Component {
    render() {
        return (
            <Layout>
                <main>
                    <h2>Technical Blog Posts</h2>
                    <ul>
                        <li>March 26, 2019: <a href="https://dev.to/annabellettaylor/we-can-rest-when-were-dead-graphql-express-and-monster-movies-3m11">We can REST when we're dead: GraphQL, Express, and monster movies</a></li>
                        <li>February 22, 2019: <a href="https://medium.com/@annabelle.t.taylor/res-send-happy-valentines-day-eb286c8d0ffe">res.send("Happy Valentine's Day!")</a></li>
                    </ul>
                    <h2>Non-Technical Blog Posts</h2>
                    <ul>
                        <li>March 8, 2019: <a href="https://dev.to/annabellettaylor/coding-for-little-annabelle-122j">Coding for Little Annabelle</a></li>
                        <li>May 11, 2018: <a href="https://medium.com/@annabelle.t.taylor/unsexy-advice-for-the-grad-next-door-ad1a699d7675">Unsexy Advice for the Grad-Next-Door</a></li>
                        <li>July 29, 2017: <a href="https://medium.com/@annabelle.t.taylor/hedwig-and-the-angry-identity-32fefda664e5">Hedwig and the Angry Identity</a></li>
                        </ul>
                </main>
            </Layout >
        );
    }
}

export default posts;
