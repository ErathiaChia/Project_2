import React from "react";
import Cloudy from "../assets/cloudy.png";
export default function Weather(props) {
	return (
		<>
			<p>How Is The Weather?</p>
			{props.setForecast.startForecast} - {props.setForecast.endForecast}
		</>
	);
}
