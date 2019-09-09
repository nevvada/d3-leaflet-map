import React, { Component } from 'react';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryInput: ''
    };
  }

  render() {
    return (
      <div className="search-bar">
        <form>
          <input
            type="text"
            id="city-query"
            autoComplete="off"
            placeholder="Search a city"
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
