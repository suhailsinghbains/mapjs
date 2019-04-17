import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import Geocode from "react-geocode";
// import GetPostalCode from '../GetPostalCode';

const mapStyles = {
  width: "100%",
  height: "100%"
};
Geocode.setApiKey("AIzaSyCmB8rNjBoF1XiG9lOYjfaS8mWGLLBp0NY");

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
      lat: "28.615427",
      lng: "77.208737",
      pinCode: ""
    };
  }
  Markers;
  componentWillReceiveProps(props) {
    var self = this;
    console.log(props.props);
    if (props.props.pinCode === "") {
      if (props.props.lat === "") {
        props.props.lat = "28.615427";
      }
      if (props.props.lng === "") {
        props.props.lng = "77.208737";
      }
      Geocode.fromLatLng(this.state.lat, this.state.lng).then(
        response => {
          const pinCode = response.results[0].address_components[6].long_name;
          self.setState({
            ...this.state,
            pinCode: pinCode
          });
        },
        error => {
          console.error(error);
        }
      );
      this.setState({
        ...props.props
      });
    } else {
      Geocode.fromAddress(props.props.pinCode).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          self.setState({
            ...this.state,
            lat,
            lng,
            pinCode: props.props.pinCode
          });
        },
        error => {
          console.error(error);
        }
      );
      //pinCode is inputted
    }
    console.log(this.state);
    //Fetch PinCodes Here
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  RADIUS = 0.09;
  GetPostalCode(props) {
    var AllDelPinCodes = [
      {
        key: "110001",
        place_name: "Connaught Place",
        admin_name1: "New Delhi",
        latitude: 28.6333,
        longitude: 77.2167,
        accuracy: 4
      },
      {
        key: "110002",
        place_name: "Darya Ganj",
        admin_name1: "New Delhi",
        latitude: 28.6333,
        longitude: 77.25,
        accuracy: 4
      },
      {
        key: "110003",
        place_name: "Aliganj",
        admin_name1: "New Delhi",
        latitude: 28.65,
        longitude: 77.2167,
        accuracy: ""
      },
      {
        key: "110004",
        place_name: "Rashtrapati Bhawan",
        admin_name1: "New Delhi",
        latitude: 28.65,
        longitude: 77.2167,
        accuracy: ""
      },
      {
        key: "110005",
        place_name: "Lower Camp Anand Parbat",
        admin_name1: "New Delhi",
        latitude: 28.65,
        longitude: 77.2,
        accuracy: ""
      },
      {
        key: "110006",
        place_name: "Bara Tooti",
        admin_name1: "New Delhi",
        latitude: 28.65,
        longitude: 77.2167,
        accuracy: ""
      },
      {
        key: "110007",
        place_name: "Birla Lines",
        admin_name1: "New Delhi",
        latitude: 28.6833,
        longitude: 77.2,
        accuracy: ""
      },
      {
        key: "110008",
        place_name: "Patel Nagar",
        admin_name1: "New Delhi",
        latitude: 28.65,
        longitude: 77.2167,
        accuracy: ""
      },
      {
        key: "110010",
        place_name: "Delhi Cantt",
        admin_name1: "New Delhi",
        latitude: 28.55,
        longitude: 77.2667,
        accuracy: ""
      },
      {
        key: "110011",
        place_name: "Nirman Bhawan",
        admin_name1: "New Delhi",
        latitude: 28.55,
        longitude: 77.2667,
        accuracy: ""
      },
      {
        key: "110012",
        place_name: "Inderpuri",
        admin_name1: "New Delhi",
        latitude: 28.55,
        longitude: 77.2667,
        accuracy: ""
      },
      {
        key: "110013",
        place_name: "Hazrat Nizamuddin",
        admin_name1: "New Delhi",
        latitude: 28.55,
        longitude: 77.2667,
        accuracy: ""
      },
      {
        key: "110014",
        place_name: "Jangpura",
        admin_name1: "New Delhi",
        latitude: 28.55,
        longitude: 77.2667,
        accuracy: ""
      },
      {
        key: "110015",
        place_name: "Zakhira",
        admin_name1: "New Delhi",
        latitude: 28.55,
        longitude: 77.2667,
        accuracy: ""
      },
      {
        key: "110016",
        place_name: "Hauz Khas",
        admin_name1: "New Delhi",
        latitude: 28.55,
        longitude: 77.2667,
        accuracy: ""
      },
      {
        key: "110017",
        place_name: "Malviya Nagar",
        admin_name1: "New Delhi",
        latitude: 28.55,
        longitude: 77.2667,
        accuracy: ""
      },
      {
        key: "110018",
        place_name: "Vishnu Garden",
        admin_name1: "New Delhi",
        latitude: 28.55,
        longitude: 77.2667,
        accuracy: ""
      },
      {
        key: "110019",
        place_name: "Nehru Place",
        admin_name1: "New Delhi",
        latitude: 28.55,
        longitude: 77.2667,
        accuracy: ""
      },
      {
        key: "110020",
        place_name: "Flatted Factories Complex",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110021",
        place_name: "Malcha Marg",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110022",
        place_name: "Postal Saving Bureau",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110023",
        place_name: "Kidwai Nagar",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110024",
        place_name: "Lajpat Nagar",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110025",
        place_name: "Jamia Nagar",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110026",
        place_name: "Punjabi Bagh",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110027",
        place_name: "J 6block Rajouri Garden",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110028",
        place_name: "Naraina Industrial Estate",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110029",
        place_name: "Himayunpur Extn",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110030",
        place_name: "T B Hospital",
        admin_name1: "New Delhi",
        latitude: 28.7556,
        longitude: 77.1667,
        accuracy: ""
      },
      {
        key: "110031",
        place_name: "Gandhi Nagar",
        admin_name1: "New Delhi",
        latitude: 28.7556,
        longitude: 77.1667,
        accuracy: ""
      },
      {
        key: "110032",
        place_name: "Shahdara",
        admin_name1: "New Delhi",
        latitude: 28.6667,
        longitude: 77.3167,
        accuracy: 4
      },
      {
        key: "110033",
        place_name: "Adarsh Nagar",
        admin_name1: "New Delhi",
        latitude: 28.7556,
        longitude: 77.1667,
        accuracy: ""
      },
      {
        key: "110034",
        place_name: "Pitampura",
        admin_name1: "New Delhi",
        latitude: 28.7556,
        longitude: 77.1667,
        accuracy: ""
      },
      {
        key: "110035",
        place_name: "Inderlok",
        admin_name1: "New Delhi",
        latitude: 28.7556,
        longitude: 77.1667,
        accuracy: ""
      },
      {
        key: "110036",
        place_name: "Alipur",
        admin_name1: "New Delhi",
        latitude: 28.8,
        longitude: 77.15,
        accuracy: 4
      },
      {
        key: "110037",
        place_name: "Gurgaon Road",
        admin_name1: "New Delhi",
        latitude: 28.7556,
        longitude: 77.1667,
        accuracy: ""
      },
      {
        key: "110038",
        place_name: "A F Rajokari",
        admin_name1: "New Delhi",
        latitude: 28.7556,
        longitude: 77.1667,
        accuracy: ""
      },
      {
        key: "110039",
        place_name: "Bawana",
        admin_name1: "New Delhi",
        latitude: 28.8,
        longitude: 77.0333,
        accuracy: 4
      },
      {
        key: "110040",
        place_name: "Sanoth",
        admin_name1: "New Delhi",
        latitude: 28.85,
        longitude: 77.1,
        accuracy: ""
      },
      {
        key: "110041",
        place_name: "Nagloi",
        admin_name1: "New Delhi",
        latitude: 28.6092,
        longitude: 77.1569,
        accuracy: ""
      },
      {
        key: "110042",
        place_name: "Badli",
        admin_name1: "New Delhi",
        latitude: 28.6092,
        longitude: 77.1569,
        accuracy: ""
      },
      {
        key: "110043",
        place_name: "Najafgarh",
        admin_name1: "New Delhi",
        latitude: 28.6125,
        longitude: 76.9847,
        accuracy: 4
      },
      {
        key: "110044",
        place_name: "Badarpur T P Station",
        admin_name1: "New Delhi",
        latitude: 28.5083,
        longitude: 77.3,
        accuracy: ""
      },
      {
        key: "110045",
        place_name: "Palam Enclave",
        admin_name1: "New Delhi",
        latitude: 28.5667,
        longitude: 77.1,
        accuracy: ""
      },
      {
        key: "110046",
        place_name: "Nangal Rava",
        admin_name1: "New Delhi",
        latitude: 28.6092,
        longitude: 77.1569,
        accuracy: ""
      },
      {
        key: "110047",
        place_name: "Arjan Garh",
        admin_name1: "New Delhi",
        latitude: 28.6092,
        longitude: 77.1569,
        accuracy: ""
      },
      {
        key: "110048",
        place_name: "Kailash",
        admin_name1: "New Delhi",
        latitude: 28.6092,
        longitude: 77.1569,
        accuracy: ""
      },
      {
        key: "110049",
        place_name: "Andrews Ganj",
        admin_name1: "New Delhi",
        latitude: 28.6092,
        longitude: 77.1569,
        accuracy: ""
      },
      {
        key: "110051",
        place_name: "Azad Nagar",
        admin_name1: "New Delhi",
        latitude: 28.6167,
        longitude: 77.2167,
        accuracy: ""
      },
      {
        key: "110052",
        place_name: "Wazirpur Phase Iii",
        admin_name1: "New Delhi",
        latitude: 28.6167,
        longitude: 77.2167,
        accuracy: ""
      },
      {
        key: "110053",
        place_name: "Zafrabad",
        admin_name1: "New Delhi",
        latitude: 28.6167,
        longitude: 77.2167,
        accuracy: ""
      },
      {
        key: "110054",
        place_name: "Civil Lines",
        admin_name1: "New Delhi",
        latitude: 28.6167,
        longitude: 77.2167,
        accuracy: ""
      },
      {
        key: "110055",
        place_name: "Paharganj",
        admin_name1: "New Delhi",
        latitude: 28.6167,
        longitude: 77.2167,
        accuracy: 4
      },
      {
        key: "110056",
        place_name: "Shakurbasti",
        admin_name1: "New Delhi",
        latitude: 28.6167,
        longitude: 77.2167,
        accuracy: ""
      },
      {
        key: "110057",
        place_name: "Munirka",
        admin_name1: "New Delhi",
        latitude: 28.6167,
        longitude: 77.2167,
        accuracy: ""
      },
      {
        key: "110058",
        place_name: "Janakpuri",
        admin_name1: "New Delhi",
        latitude: 28.6167,
        longitude: 77.2167,
        accuracy: ""
      },
      {
        key: "110059",
        place_name: "Uttam Nagar",
        admin_name1: "New Delhi",
        latitude: 28.6167,
        longitude: 77.2167,
        accuracy: ""
      },
      {
        key: "110060",
        place_name: "New Rajinder Nagar",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110061",
        place_name: "Bijwasan",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110062",
        place_name: "Hamdard Nagar",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110063",
        place_name: "Paschim Vihar",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110064",
        place_name: "Hari Nagar Be Block",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110065",
        place_name: "East Of Kailash",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110066",
        place_name: "R K Puram",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110067",
        place_name: "D D A Munirka",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110070",
        place_name: "Vasant Kunj",
        admin_name1: "New Delhi",
        latitude: 28.6528,
        longitude: 76.9539,
        accuracy: ""
      },
      {
        key: "110071",
        place_name: "Chhawla",
        admin_name1: "New Delhi",
        latitude: 28.6528,
        longitude: 76.9539,
        accuracy: ""
      },
      {
        key: "110072",
        place_name: "Jharoda Kalan",
        admin_name1: "New Delhi",
        latitude: 28.6528,
        longitude: 76.9539,
        accuracy: 4
      },
      {
        key: "110073",
        place_name: "Ujwa",
        admin_name1: "New Delhi",
        latitude: 28.6528,
        longitude: 76.9539,
        accuracy: ""
      },
      {
        key: "110081",
        place_name: "Kanjhawala",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110082",
        place_name: "Khera Kalan",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110083",
        place_name: "Mangolpuri Block A",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110084",
        place_name: "Kutubgarh",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110088",
        place_name: "Shalimar Bagh",
        admin_name1: "New Delhi",
        latitude: 28.7165,
        longitude: 77.1629,
        accuracy: 6
      },
      {
        key: "110091",
        place_name: "Himmatpuri",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110092",
        place_name: "Shakarpur",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110093",
        place_name: "Nand Nagri A Block",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110094",
        place_name: "Gokulpuri",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      },
      {
        key: "110096",
        place_name: "Bhajan Pura",
        admin_name1: "New Delhi",
        latitude: 28.6488,
        longitude: 77.1726,
        accuracy: ""
      }
    ];

    let Array = [];
    // console.log(props.props)
    let Lat = props[0];
    let Lng = props[1];
    //Search for the 10km radius
    //   let

    for (let i = 0; i < AllDelPinCodes.length; i++) {
      if (
        Math.pow(AllDelPinCodes[i].latitude - Lat, 2) +
          Math.pow(AllDelPinCodes[i].longitude - Lng, 2) <=
        Math.pow(this.RADIUS, 2)
      ) {
        Array.push(
          <Marker
            onClick={this.onMarkerClick}
            position={{
              lat: AllDelPinCodes[i].latitude,
              lng: AllDelPinCodes[i].longitude
            }}
            name={AllDelPinCodes[i].key}
            key={AllDelPinCodes[i].key}
          />
        );
      }
    }
    console.log(Array);
    return Array;
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: "28.615427",
          lng: "77.208737"
        }}
        center={{
          lat: Number(this.state.lat),
          lng: Number(this.state.lng)
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={this.state.pinCode}
          position={this.state}
        />

        {this.GetPostalCode([this.state.lat, this.state.lng])}
        {/* <GetPostalCode param={}/> */}

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
  apiKey: "AIzaSyCmB8rNjBoF1XiG9lOYjfaS8mWGLLBp0NY"
})(MapContainer);
