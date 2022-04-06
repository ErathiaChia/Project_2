import LocationScreen from "./Location";
import WeatherScreen from "./Weather";
import TransportScreen from "./Transport";
import TaxiScreen from "./Taxi";
import CarparkScreen from "./Carpark";
import "./Main.css";

function MainScreen() {
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
					<TransportScreen />
				</div>
				<div className="gridItem-taxi">
					<br />
					{/* temporary breaks to see this section */}
					<TaxiScreen />
				</div>
				<div className="gridItem-carpark">
					<br />
					<br />
					{/* temporary breaks to see this section */}
					<CarparkScreen />
				</div>
			</div>
		</>
	);
}

export default MainScreen;
