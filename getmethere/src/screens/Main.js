import React from "react";
import LocationScreen from "./Location";
import WeatherScreen from "./Weather";
import TransportScreen from "./Transport";
import TaxiScreen from "./Taxi";
import CarparkScreen from "./Carpark";
import "./Main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class MainScreen extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<>
				<h1>Get Me There</h1>
				<div className="gridContainer">
					<div className="gridItem-location">
						<LocationScreen />
					</div>
					<div className="gridItem-weather">
						<WeatherScreen />
					</div>
					<div className="gridItem-transport">
						<Router>
							<Switch>
								<Route path="/">
									<TransportScreen />
								</Route>
								<Route path="/taxi">
									<TaxiScreen />
								</Route>
								<Route path="/carpark">
									<CarparkScreen />
								</Route>
							</Switch>
						</Router>
					</div>
				</div>
			</>
		);
	}
}

export default MainScreen;
