"use strict";

const saturn = {
		"Name": "Saturn",
		"YearDiscovered": "1610",
		"Mass": "5.683 × 10^26 kg",
		"Size": "36,184 mi",
		"DistanceFromSun": "888.2 million mi",
		"AtmosphereComposition": "hydrogen and helium",
		"Satellites": "Enceladus, Titan, and Tethys",
		"Orbiters": "Titan Probe (SOTP)"
};
		
function outputTo(domElement) {
 	let saturnString = `<div class="planet" id="saturn">`;
 	for(let key in saturn){
 		saturnString += `<p>${key} : ${saturn[key]}</p>`;
 	}
 	 	saturnString += `</div>`;
  domElement.innerHTML += saturnString;
}

module.exports = outputTo;
console.log("I'm on Saturn");