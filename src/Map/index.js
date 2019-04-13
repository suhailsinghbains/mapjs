import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
    width: "100%",
    height: "100%"
};

export class MapContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
            lat: '27.8',
            lng: '30',
            PinCode: ''
        };
    }
    componentWillReceiveProps(props) {
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
        // console.log(window.google)
        return (
            <Map
                google={this.props.google}
                zoom={12}
                style={mapStyles}
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
