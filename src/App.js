import React, { Component } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchInput: "",
		};
		// console.log("constructor");
	}

	componentDidMount() {
		// console.log("componentDidMount");
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) =>
				this.setState(() => {
					return { monsters: users };
				})
			);
	}

	handleSearch = (event) => {
		const searchInput = event.target.value.toLocaleLowerCase();
		this.setState(() => {
			return { searchInput };
		});
	};

	render() {
		const { monsters, searchInput } = this.state;
		const { handleSearch } = this;
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchInput);
		});
		console.log("Render from AppJS");
		return (
			<div className="App">
				<SearchBox
					className="monsters-search-box"
					placeholder="search monsters"
					handleSearch={handleSearch}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
