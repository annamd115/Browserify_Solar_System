"use strict";

const neptune = {
		"Name": "Neptune",
		"YearDiscovered": "1846",
		"Mass": "1.024 × 10^26 kg",
		"Size": "15,299 mi",
		"DistanceFromSun": "2.795 billion mi",
		"AtmosphereComposition": "Hydrogen, Helium, and Methane",
		"Satellites": "Triton, Nereid, and Proteus",
		"Orbiters": "N/A"
};
		
function outputTo(domElement) {
 	let neptuneString = `<div class="planet" id="neptune">`;
 	for(let key in neptune){
 		neptuneString += `<p>${key} : ${neptune[key]}</p>`;
 	}
 	neptuneString += `</div>`;
  domElement.innerHTML += neptuneString;
}

module.exports = outputTo;
console.log("I'm on Neptune");