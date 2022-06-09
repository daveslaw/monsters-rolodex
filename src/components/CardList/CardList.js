import { Component } from "react";
import "./card-list.styles.css";
import CardItem from '../CardItem/CardItem';

class CardList extends Component {
	render() {
		console.log("Render from Cardlist");
		const { monsters } = this.props;
		return (
			<div className="card-list">
				{monsters.map((monster) => {
					return (
						<CardItem
							email={monster.email}
							key={monster.id}
							name={monster.name}
							source={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
						/>
					);
				})}
			</div>
		);
	}
}

export default CardList;
