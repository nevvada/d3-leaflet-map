import React, { Component } from 'react';
import Map from './components/Map';

import '../scss/styles.scss';
// import SearchBar from './components/SearchBar';
import LocationSearchInput from './components/LocationSearchInput';

export class App extends Component {
  state = {
    clickedLatLng: { lat: 0, lng: 0 }
  };

  retrieveLatLng = coordinates => {
    this.setState({
      clickedLatLng: {
        ...this.state.clickedLatLng,
        lat: coordinates.lat,
        lng: coordinates.lng
      }
    });
  };

  render() {
    return (
      <>
        {/* <SearchBar /> */}
        <LocationSearchInput retrieveLatLng={this.retrieveLatLng} />
        <Map clickedLatLng={this.state.clickedLatLng} />
      </>
    );
  }
}

export default App;
