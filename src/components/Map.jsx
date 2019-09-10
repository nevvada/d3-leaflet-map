import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const style = {
  width: '100%',
  height: '100vh'
};

export default class Map extends Component {
  constructor() {
    super();
    this.state = {
      lat: 40.712,
      lng: -74.005,
      zoom: 13
    };
  }

  componentDidUpdate(prevProps) {
    // compare old props to new props to check if different city was clicked, and if so,
    // update state with new latitude and longitude, thus triggering rerender
    if (
      this.props.clickedLatLng.lat !== prevProps.clickedLatLng.lat &&
      this.props.clickedLatLng.lng !== prevProps.clickedLatLng.lng
    ) {
      let newLat = this.props.clickedLatLng.lat;
      let newLng = this.props.clickedLatLng.lng;
      this.setState({ lat: newLat, lng: newLng });
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}
