"use strict";

const mercury = {
		"Name": "Mercury",
		"YearDiscovered": " 265 BC",
		"Mass": "3.285 × 10^23 kg",
		"Size": "1,516 mi",
		"DistanceFromSun": "35.98 million mi",
		"AtmosphereComposition": "hydrogen, helium, and oxygen",
		"Satellites": "Messenger",
		"Orbiters": "Mercury Planetary Orbiter (MPO) and the Mercury Magnetospheric Orbiter"
};
		
function outputTo(domElement) {
 	let mercuryString = `<div class="planet" id="mercury">`;
 	for(let key in mercury){
 		mercuryString += `<p>${key} : ${mercury[key]}</p>`;
 	}
 		mercuryString += `</div>`;
  domElement.innerHTML += mercuryString;
}

module.exports = outputTo;
console.log("I'm on Mercury");