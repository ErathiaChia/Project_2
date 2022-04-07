import React from "react";
export default function Weather(props) {
	return (
		<>
			<p>How Is The Weather?</p>
			{props.setForecast.startForecast} - {props.setForecast.endForecast}
		</>
	);
}
