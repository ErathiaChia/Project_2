import React from "react";
import axios from "axios";

let alltaxiavailbility = '';

function geoFindMe() {

  const status = '';//document.querySelector('#status');
  const mapLink = '';//document.querySelector('#map-link');

  //mapLink.href = '';
  //mapLink.textContent = '';

  function success(position) {
    const MYlatitude = position.coords.latitude;
    const MYlongitude = position.coords.longitude;

    //status.textContent = '';
    //mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    console.log(`Latitude: ${MYlatitude} °, Longitude: ${MYlongitude} °`);
  }

  function error() {
    //status.textContent = 'Unable to retrieve your location';
  }

  if (!navigator.geolocation) {
    //status.textContent = 'Geolocation is not supported by your browser';
  } else {
    //status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

export default function Taxi() {
  const [results, setResults] = React.useState([]);

  const getAPI = async () => {
    const response = await axios.get(`https://api.data.gov.sg/v1/transport/taxi-availability`
    );
    if (response.status === 200) {
      // console.log(response);
      //console.log('total number of taxi : ' + response.data.features[0].geometry.coordinates.length);
      //console.log(response.data.features[0].geometry.coordinates);
      setResults(response.data.features[0].geometry.coordinates);
    }
  };

  React.useEffect(() => {
    getAPI();
    geoFindMe();

  }, []);

  const test = results[0];

  console.log(results[0]);

  test.key((data) => {
    console.log(data);
  })


  return (
    <>
      <div>
        <h1>Tell me the nearest taxi:</h1>
        <p id="totalTaxi"></p>
      </div>
    </>
  );
}