"use strict";

const earth = {
		"Name": "Earth",
		"YearDiscovered": "a long time ago",
		"Mass": "5.972 × 10^24 kg",
		"Size": "3,959 mi",
		"DistanceFromSun": "3,959 mi",
		"AtmosphereComposition": "Nitrogen, oxygen and argon",
		"Satellites": "Moon",
		"Orbiters": "N/A"
};

function outputTo(domElement) {
 	let earthString = `<div class="planet" id="earth">`;
 	for(let key in earth){
 		earthString += `<p>${key} : ${earth[key]}</p>`;
 	}
 	earthString += `</div>`;
  domElement.innerHTML += earthString;
}

module.exports = outputTo;
console.log("I'm on Earth");