import LocationScreen from "./Location";
import WeatherScreen from "./Weather";
import TransportScreen from "./Transport";
import TaxiScreen from "./Taxi";
import CarparkScreen from "./Carpark";
import "./Main.css";

function MainScreen() {
	return (
		<>
			<h2>get me THERE !</h2>
   			<ul>
				<li><a class="active" href="#home">Home</a></li>
				<li><a href="#news">News</a></li>
				<li><a href="#contact">Contact</a></li>
				<li><a href="#about">About</a></li>
  			</ul>
    
			<body />
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
