import React from "react";
import axios from "axios";
import moment from "moment";

export default function Location(props) {
	const now = moment().format().slice(0, 19);
	const [APIresults, setAPIResults] = React.useState([]);
	const [locationSelection, setLocationSelection] = React.useState({
		startLocation: "Select start location",
		endLocation: "Select end location",
	});
	const [locationForecast, setLocationForecast] = React.useState({
		startForecast: "",
		endForecast: "",
	});

	const getAPI = async () => {
		const response = await axios.get(
			// use this url to get current weather forecast
			`https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date_time=${now}`

			//to make sure it is working properly, compare with 5/3/22 since it has different values
			// `https://api.data.gov.sg/v1/environment/2-hour-weather-forecast?date=2022-03-05`
		);
		if (response.status === 200) {
			// console.log(response);
			console.log(response.data.items[0].forecasts);
			setAPIResults(response.data.items[0].forecasts);
		}
	};
	function handleChange(event) {
		setLocationSelection((prevData) => {
			return {
				...prevData,
				[event.target.name]: event.target.value,
			};
		});

		let index = APIresults.findIndex(
			(location) => location.area == event.target.value
		);
		if (index > -1) {
			if (event.target.name == "startLocation") {
				setLocationForecast((prevData) => {
					return {
						...prevData,
						startForecast: APIresults[index].forecast,
					};
				});
			}
			if (event.target.name == "endLocation") {
				setLocationForecast((prevData) => {
					return {
						...prevData,
						endForecast: APIresults[index].forecast,
					};
				});
			}
		}
	}
	console.log(locationForecast);
	props.getForecast(locationSelection, locationForecast);
	React.useEffect(() => {
		getAPI();
	}, []);
	return (
		<>
			<p>Locations</p>
			<div className="weather-bottom">
				<div>
					<select onChange={handleChange} name="startLocation">
						<option>Select start location</option>
						{APIresults.map((result, index) => {
							return <option key={"s" + index}>{result.area}</option>;
						})}
					</select>
				</div>
				<div>
					<select onChange={handleChange} name="endLocation">
						<option>Select end location</option>
						{APIresults.map((result, index) => {
							return <option key={"e" + index}>{result.area}</option>;
						})}
					</select>
				</div>
			</div>
		</>
	);
}
