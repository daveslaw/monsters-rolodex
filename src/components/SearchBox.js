import React, { Component } from "react";

class SearchBox extends Component {
	render() {
		const { handleSearch, className, placeholder } = this.props;
		return (
			<input
				className={className}
				type="search"
				placeholder={placeholder}
				onChange={handleSearch}
			/>
		);
	}
}

export default SearchBox;
