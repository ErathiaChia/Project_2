import { Switch, Route, Link } from "react-router-dom";
import taxi from "../assets/taxi.png";
import drive from "../assets/drive.png";
import driving from "../assets/driving.gif";
import movingtaxi from "../assets/taxi-cab.gif";

function transport() {
	return (
		<>
			<p>Which mode of transport?</p>
			<div className="flex-container-transport">
				<Link to="/carpark">
					<div className="carpark">
						<img src={driving} className="image-driving" />
						<div className="middle-carpark">
							<div className="text">Carpark</div>
						</div>
					</div>
				</Link>
				<Link to="/taxi">
					<div className="taxi">
						<img src={movingtaxi} className="image-taxi" />
						<div className="middle-taxi">
							<div className="text">Taxi</div>
						</div>
					</div>
				</Link>
			</div>
			<div>
				<Switch>
					<Route path="/carpark">
						<div>Carpark</div>
					</Route>
					<Route path="/taxi">
						<div>Taxi</div>
					</Route>
				</Switch>
			</div>
		</>
	);
}

export default transport;
