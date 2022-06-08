import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
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
		console.log("Render");
		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="Search monsters"
					onChange={(event) => {
						const searchString = event.target.value.toLocaleLowerCase();
						const filteredMonsters = this.state.monsters.filter((monster)=> {
							return monster.name.toLocaleLowerCase().includes(searchString)
						})
						this.setState(()=>{
							return { monsters: filteredMonsters}
						})
						console.log(event.target.value);
					}}
				/>
				{this.state.monsters.map((monster) => {
					return <h1 key={monster.id}>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

App.propTypes = {};

export default App;
