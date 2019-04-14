import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import Geocode from "react-geocode";

const mapStyles = {
    width: "100%",
    height: "100%"
};
Geocode.setApiKey('AIzaSyBWlXb6g8OVd1rFIaV6opbD2np2ZwgWqzE');

export class MapContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
            lat: '28.615427',
            lng: '77.208737',
            PinCode: ''
        };
    }
    componentWillReceiveProps(props) {
        console.log(props.props)
        if (props.props.lat === '') {
            props.props.lat = '28.615427'
        }
        if (props.props.lng === '') {
            props.props.lng = '77.208737'
        }
        this.setState({
            ...props.props
        })
        console.log(this.state)
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    render() {
        Geocode.fromLatLng(this.state.lat, this.state.lng).then(
            response => {
              const address = response.results[0].formatted_address;
              console.log(address);
            },
            error => {
              console.error(error);
            }
          );        
        return (
            <Map
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={{
                    lat: '28.615427',
                    lng: '77.208737'
                }}
                center={{
                    lat: Number(this.state.lat),
                    lng: Number(this.state.lng)
                }}

            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={'This is PinCode'}
                    position={this.state}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBWlXb6g8OVd1rFIaV6opbD2np2ZwgWqzE"
})(MapContainer);
