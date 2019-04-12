import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: 28.6,
          lng: 77.2025
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBWlXb6g8OVd1rFIaV6opbD2np2ZwgWqzE"
})(MapContainer);
