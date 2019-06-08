import React, { Component } from "react";

class PortfolioEntry extends Component {
	render() {
		return (
			<article>
                <h2>{this.props.title}</h2>
                <center><a href={this.props.siteLink}><img src={this.props.image} className="portfolio-image" alt={this.props.title}/></a></center>
                <p><strong>{this.props.date}: </strong> {this.props.description}</p>
                <p>View the <a href={this.props.siteLink}>live site</a> or visit the <a href={this.props.repo}>GitHub repo</a>.</p>
            </article>
		);
	}
}

export default PortfolioEntry;
