import React from "react";
import {useState} from "react";
import axios from "axios";
import styled from "styled-components";


//tamira code
function CarPark() {

	const getAPI = async () => {
		const response = await axios.get(
			"https://the-ultimate-api-challenge.herokuapp.com/http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2",
			{
				headers: {
					AccountKey: "l3utmkQ1SKq2xOQ/+2DB3A==",
					accept: "application/json",
				},
			}
		);
		if (response.status === 200) {
			console.log(response.data.value[0]);
			printBrowser(response)
	
		}
	};

	
	// const getAPI = async () => {
	// 	const response = await axios.get(
	// 		"https://the-ultimate-api-challenge.herokuapp.com/http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2",
	// 		{
	// 			headers: {
	// 				AccountKey: "l3utmkQ1SKq2xOQ/+2DB3A==",
	// 				accept: "application/json",
	// 			},
	// 		}
	// 	);
	// 	if (response.status === 200) {
	// 		console.log(response.data.value[0]);
	// 		printNow()
	// 	}
	// };

	React.useEffect(() => {getAPI();}, []);

	function printBrowser(response){
		setTimeout(function() {document.getElementById('res').innerHTML = `
		<div>
		  <h5>Carpark #3: ${JSON.stringify(response.data.value[2].Development)}<br> 
		  Available Lots: ${JSON.stringify(response.data.value[2].AvailableLots)}</h5>
		</div>`;
	},5000);
	}

	//document.getElementById('get').addEventListener('click', getAPI);


	// function printNow(){
	// 	document.getElementById('res').innerHTML =`
	// 	<div>
	// 	<h5>Status: ${response.data}</h5>
	//   	</div>`
	// 	console.log ("this shit gets printed");
	// }

	// function printReq(res) {
	// 	document.getElementById('res').innerHTML = `
	// 	<div>
	// 	  <h5>Status: ${res.status}</h5>
	// 	</div>
	  
	// 	<div>
	// 	  <h3>Data Body: <h3>
	// 	  <pre>${JSON.stringify(res.data.value[0], null, 2)}</pre>
	// 	</div>`;
	// }
	  
//	document.getElementById('get').addEventListener('click', getAPI);

	return (
		<>
			<p>Carparks Available</p>
			<input placeholder="Enter Location" />
			<button id="get">Search</button>
			<hr/>
			<div id="res"></div>
		</>
	);
}

// function carpark() {
// 	return (
// 		<>
// 			<p>carpark</p>
// 		</>
// 	);
// }


//dropdown codes
const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <Main>
      <h1>Custom Select/dropdown</h1>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>Mangoes</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem>Mangoes</ListItem>
              <ListItem>Apples</ListItem>
              <ListItem>Oranges</ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}
export default CarPark;
