import React, { Component } from 'react';
// import L from 'leaflet';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const style = {
  width: '100%',
  height: '100vh'
};

export default class Map extends Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <LeafletMap stype={style} center={position} zoom={this.state.zoom}>
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

// class Map extends React.Component {
//   componentDidMount() {
//     // create map
//     this.map = L.map('map', {
//       center: [49.8419, 24.0315],
//       zoom: 16,
//       layers: [
//         L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//           attribution:
//             '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         })
//       ]
//     });
//   }

// render() {
//   return <div id="map" style={style}></div>;
// }
// }

// export default Map;
