"use strict";

const mars = {
		"Name": "Mars",
		"YearDiscovered": "1659",
		"Mass": "6.39 × 10^23 kg",
		"Size": "2,106 mi",
		"DistanceFromSun": "141.6 million mi",
		"AtmosphereComposition": "carbon dioxide, argon and nitrogen",
		"Satellites": "Mars Orbiter Mission (MOM)",
		"Orbiters": "Mars 2, Mars 3, Mariner 9"
};
		
function outputTo(domElement) {
 	let marsString = `<div class="planet" id="mars">`;
 	for(let key in mars){
 		marsString += `<p>${key} ${mars[key]}</p>`;
 	}
 	marsString += `</div>`;
  domElement.innerHTML += marsString;
}

module.exports = outputTo;
console.log("I'm on Mars");