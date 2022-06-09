import React, { Component } from "react";

export default class CardItem extends Component {
	render() {
		
		const {name, email, source} = this.props;
		
		return (
			<div className="card-container">
				<img
					alt={`monster ${name}`}
					src={source}
				/>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		);
	}
}
