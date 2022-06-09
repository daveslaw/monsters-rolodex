import React, { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
	render() {
		const { handleSearch, className, placeholder } = this.props;
		return (
			<input
				className={`search-box ${className}`}
				type="search"
				placeholder={placeholder}
				onChange={handleSearch}
			/>
		);
	}
}

export default SearchBox;
