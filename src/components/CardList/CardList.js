import { Component } from "react";
import './card-list.styles.css'

class CardList extends Component {
	render() {
		console.log("Render from Cardlist");
		const { monsters } = this.props;
		return (
			<div className="card-list">
				{monsters.map((monster) => (
					<div key={monster.id} className="card-container">
						<img
							alt={`monster ${monster.name}`}
							src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
						/>
						<h2>{monster.name}</h2>
						<p>{monster.email}</p>
					</div>
				))}
			</div>
		);
	}
}

export default CardList;
