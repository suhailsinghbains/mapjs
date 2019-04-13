import React, { Component } from "react";
import MapContainer from "./Map";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lng: "",
      pinCode: "",
      opacity: "0.3",
      zIndex: "1"
    };
  }

  Property = {
    0: "lat",
    1: "lng",
    2: "pinCode"
  };

  InputValueChange(e, input) {
    this.setState({
      ...this.state,
      [this.Property[e]]: input
    });
  }

  GotoLocation(e) {
    //MapContainer opacity 1 and zIndex to -1
    if (e === 0) {
      this.setState({
        ...this.state, pinCode: ''
      })
      //Go to this Lat & Long
    } else if (e === 1) {
      this.setState({
        ...this.state, lat: '', lng: ''
      })
      //Got to this pin code
    } else {

      //Just Display the Map by removing the opacity
    }
    this.setState({
      ...this.state,
      opacity: "1",
      zIndex: "-1"
    });
    // this.forceUpdate(this)

  }

  CloseMap() {
    this.setState({
      ...this.state,
      opacity: "0.3",
      zIndex: "1"
    });
  }

  render() {
    return (
      <div>
        <div style={{ opacity: this.state.opacity }}>
          <MapContainer props={{ lat: this.state.lat, lng: this.state.lng, pinCode: this.state.pinCode }} />
          <div
            style={{ position: "absolute", left: "10px", fontSize: "4em" }}
            onClick={() => this.CloseMap()}
          >
            X
          </div>
        </div>
        <div className="overlay" style={{ zIndex: this.state.zIndex }}>
          <div className="flex-Dir-Col width-100">
            <div className="center">
              <h2>G Maps using ReactJS</h2>
            </div>
            <div className="flex flex-Dir-Row padding-12">
              <div className="width-50 center flex flex-Dir-Col padding-5">
                <h3>Enter Longitude and Latitude</h3>
                Latitude:{" "}
                <input
                  value={this.state.lat}
                  onChange={e => this.InputValueChange(0, e.target.value)}
                />
                Longitude:{" "}
                <input
                  value={this.state.lng}
                  onChange={e => this.InputValueChange(1, e.target.value)}
                />
                <div className="padding-top-5">
                  <button
                    className="primary"
                    onClick={() => this.GotoLocation(0)}
                  >
                    <h3>Go to Location</h3>
                  </button>
                </div>
              </div>

              <div className="width-50 center flex flex-Dir-Col padding-5">
                <h3>Enter Pin Code</h3>
                Pin Code:{" "}
                <input
                  value={this.state.pinCode}
                  onChange={e => this.InputValueChange(2, e.target.value)}
                />
                <div className="padding-top-5">
                  <button
                    className="primary"
                    onClick={() => this.GotoLocation(1)}
                  >
                    <h3>Go to this Pin Code</h3>
                  </button>
                </div>
              </div>

              <div className="width-50 center flex flex-Dir-Col padding-5">
                <button
                  className="primary"
                  onClick={() => this.GotoLocation(2)}
                >
                  <h3>View Map</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
