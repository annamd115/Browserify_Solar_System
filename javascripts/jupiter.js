"use strict";

const jupiter = {
		"Name": "Jupiter",
		"YearDiscovered": "1610",
		"Mass": "1.898 × 10^27 kg",
		"Size": "43,441 mi",
		"DistanceFromSun": "483.8 million mi",
		"AtmosphereComposition": "hydrogen and helium",
		"Satellites": "Europa, Io, Ganymeade",
		"Orbiters": "Galileo"
};
		
function outputTo(domElement) {
 	let jupiterString = `<div class="planet" id="jupiter">`;
 	for(let key in jupiter){
 		jupiterString += `<p>${key} : ${jupiter[key]}</p>`;
 	}
 	jupiterString += `</div>`;
  domElement.innerHTML += jupiterString;
}

module.exports = outputTo;
console.log("I'm on Jupiter");