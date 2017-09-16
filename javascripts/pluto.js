"use strict";

const pluto = {
		"Name": "Pluto",
		"YearDiscovered": "1930",
		"Mass": "1.30900 × 10^22 kg",
		"Size": "737.6 mi",
		"DistanceFromSun": "3.67 billion mi",
		"AtmosphereComposition": "Nitrogen and other complex molecules such as methane",
		"Satellites": "Charon and Hydra",
		"Orbiters": "New Horizons"
};
		
function outputTo(domElement) {
 	let plutoString = `<div class="planet" id="pluto">`;
 	for(let key in pluto){
 		plutoString += `<p>${key} : ${pluto[key]}</p>`;
 	}
 	plutoString += `</div>`;
  domElement.innerHTML += plutoString;
}

module.exports = outputTo;
console.log("I'm on Pluto");