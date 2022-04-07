import React from "react";
import LocationScreen from "./Location";
import WeatherScreen from "./WeatherScreen";
import TransportScreen from "./Transport";
import TaxiScreen from "./Taxi";
import CarparkScreen from "./Carpark";
import "./Main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function MainScreen() {
	const [locationSelection, setLocationSelection] = React.useState({
		startLocation: "",
		endLocation: "",
	});
	const [locationForecast, setLocationForecast] = React.useState({
		startForecast: "",
		endForecast: "",
	});
	const getForecast = (location, forecast) => {
		setLocationSelection(location);
		setLocationForecast(forecast);
	};
	console.log("main rendered");
	console.log(locationSelection, locationForecast);

	return (
		<>
			<h1>Get Me There</h1>
			<div className="gridContainer">
				<div className="gridItem-location">
					{/* Weather API called in LocationScreen and data is passed back to parent */}
					<LocationScreen getForecast={getForecast} />
				</div>
				<div className="gridItem-weather">
					{/* forecast data passed into WeatherScreen */}
					<WeatherScreen setForecast={locationForecast} />
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
