import React from "react";
import "./App.css";

import Buttons from "./components/Buttons/Buttons";
import {
  getAllBixiStationsInfo,
  getAllBixiStationsAvailability
} from "./api/bixiStation";
import {
  getNearestStations,
  getNearestStationsToRent,
  getNearestStationsToReturn
} from "./utils/nearestStation";
class App extends React.Component {
  state = {
    lat: null,
    long: null,
    errMess: "",
    usrFunct: null,
    nearestStations: []
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        }),
      err => this.setState({ errMess: err.message })
    );
  }

  handleClick = async functionality => {
    const stationsAvailability = await getAllBixiStationsAvailability();
    const stationsInfo = await getAllBixiStationsInfo();
    const nearestStations = getNearestStations(
      this.state.lat,
      this.state.long,
      stationsInfo,
      stationsAvailability
    );
    this.setState({
      usrFunct: functionality,
      nearestStations: nearestStations
    });
  };

  getInformation = () => {
    let info = <div />;
    if (this.state.usrFunct === "rent") {
      const nearestRentStation = getNearestStationsToRent(
        this.state.nearestStations,
        1
      );
      info = <div>{nearestRentStation[0].name}</div>;
    } else if (this.state.usrFunct === "return") {
      const nearestReturnStation = getNearestStationsToReturn(
        this.state.nearestStations,
        1
      );
      info = <div>{nearestReturnStation[0].name}</div>;
    }
    return info;
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1 className="Header">Find your nearest bixi stations</h1>
          <Buttons className="buttons" handleClick={this.handleClick} />
          {this.getInformation()}
        </div>
      </div>
    );
  }
}

export default App;
