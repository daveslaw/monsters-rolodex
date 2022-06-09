import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchInput: '',
		};
		console.log("constructor");
	}

	componentDidMount() {
		console.log("componentDidMount");
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) =>
				this.setState(
					() => {
						return { monsters: users };
					},
					() => {
						console.log(this.state);
					}
				)
			);
	}

	render() {
		const filteredMonsters = this.state.monsters.filter((monster)=> {
			return monster.name.toLocaleLowerCase().includes(this.state.searchInput)
		})
		console.log("Render");
		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="Search monsters"
					onChange={(event) => {
						const searchInput = event.target.value.toLocaleLowerCase();
						
						this.setState(()=>{
							return { searchInput }
						})
						console.log(event.target.value);
					}}
				/>
				{filteredMonsters.map((monster) => {
					return <h1 key={monster.id}>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

App.propTypes = {};

export default App;
