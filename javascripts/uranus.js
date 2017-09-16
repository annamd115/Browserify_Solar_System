"use strict";

const uranus = {
		"Name": "Uranus",
		"YearDiscovered": "1781",
		"Mass": "8.681 × 10^25 kg",
		"Size": "15,759 mi",
		"DistanceFromSun": "1.784 billion mi",
		"AtmosphereComposition": "hydrogen and helium",
		"Satellites": "Miranda and Umbriel",
		"orbiters": "N/A"
};
		
function outputTo(domElement) {
 	let uranusString = `<div class="planet" id="uranus">`;
 	for(let key in uranus){
 		uranusString += `<p>${key} : ${uranus[key]}</p>`;
 	}
 	 	uranusString += `</div>`;
  domElement.innerHTML += uranusString;
}

module.exports = outputTo;
console.log("I'm on Uranus");