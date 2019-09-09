import React, { Component } from 'react';
import Map from './components/Map';

import '../scss/styles.scss';
import SearchBar from './components/SearchBar';

export class App extends Component {
  render() {
    return (
      <>
        <SearchBar />
        <Map />
      </>
    );
  }
}

export default App;
