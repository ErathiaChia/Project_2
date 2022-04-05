import React from "react";
import axios from "axios";
import moment from "moment";

export default function Weather() {
	const now = moment().format().slice(0, 19);
	// console.log(now);
	// const [time, setTime] = React.useState(moment().format("MMMM Do YYYY, h:mm a"));
	const [time, setTime] = React.useState("");
	const [locationSelection, setLocationSelection] = React.useState({
		startLocation: "",
		endLocation: "",
		startForecast: "",
		endForecast: "",
	});
	// const [locationForecast, setLocationForecast] = React.useState()
	const [results, setResults] = React.useState([]);
	const getAPI = async () => {
		const response = await axios.get(
			// "https://api.unsplash.com/photos/random?client_id=qmVaKW82sk_6DGdzL7kS_BNFDDGeIPoqfkqdfjQ3CiY&orientation=landscape&query=space"
			`https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=${now}`
			// "https://data.gov.sg/api/action/datastore_search?resource_id=139a3035-e624-4f56-b63f-89ae28d4ae4c&q=HE12"
			// "https://the-ultimate-api-challenge.herokuapp.com/http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2",
			// {
			// 	headers: {
			// 		AccountKey: "l3utmkQ1SKq2xOQ/+2DB3A==",
			// 		accept: "application/json",
			// 	},
			// }
		);
		if (response.status === 200) {
			// console.log(response);
			console.log(response.data.items[0].forecasts);
			setResults(response.data.items[0].forecasts);
		}
	};
	function handleChange(event) {
		console.log(event);
		setLocationSelection((prevData) => {
			return {
				...prevData,
				[event.target.name]: event.target.value,
			};
		});
		console.log(locationSelection);
		let startForecastIndex = results.findIndex(
			(element) => element.area == locationSelection.startLocation
		);
		let endForecastIndex = results.findIndex(
			(element) => element.area == locationSelection.endLocation
		);
		setLocationSelection((prevData) => {
			return {
				...prevData,
				startForecast: results[startForecastIndex + 1].forecast,
				endForecast: results[endForecastIndex + 1].forecast,
			};
		});
	}
	React.useEffect(() => {
		getAPI();
	}, []);

	// React.useEffect(() => {
	// 	getAPI();
	// 	const interval = setInterval(() => {
	// 		displayTime();
	// 	}, 1000);
	// 	return () => {
	// 		clearInterval(interval);
	// 	};
	// }, [time]);

	// function displayTime() {
	// 	setTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
	// }

	return (
		<>
			<div className="weather-top">
				<h1>Tell me the weather for:</h1>
				<h2>{time}</h2>
			</div>
			<div className="weather-bottom">
				<div>
					<select onChange={handleChange} name="startLocation">
						<option>Select start location</option>
						{/* populate dropdown with all locations */}
						{results.map((result, index) => {
							return <option key={index}>{result.area}</option>;
						})}
					</select>
					{/* conditional display to show start location and start forecast */}
					{locationSelection.startLocation != "Select start location" &&
						locationSelection.startLocation + "-" + locationSelection.startForecast}
				</div>
				<div>
					<select onChange={handleChange} name="endLocation">
						<option>Select end location</option>
						{results.map((result, index) => {
							return <option key={index}>{result.area}</option>;
						})}
					</select>
					{locationSelection.endLocation != "Select end location" &&
						locationSelection.endLocation + "-" + locationSelection.endForecast}
				</div>
			</div>
		</>
	);
}
