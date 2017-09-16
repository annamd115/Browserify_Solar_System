 "use strict";

const venus = {
		"Name": "Venus",
		"YearDiscovered": "1761",
		"Mass": "4.867 × 10^24 kg",
		"Size": "3,760 mi",
		"DistanceFromSun": "67.24 million mi",
		"AtmosphereComposition": "carbon dioxide",
		"Satellites": "N/A",
		"Orbiters": "Atkasuki"
};
		
function outputTo(domElement) {
 	let venusString = `<div class="planet" id="venus">`;
 	for(let key in venus){
 		venusString += `<p>${key} : ${venus[key]}</p>`;
 	} 	
 		venusString += `</div>`;
  domElement.innerHTML += venusString;
}

module.exports = outputTo;
console.log("I'm on Venus");