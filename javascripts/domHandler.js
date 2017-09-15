"use strict";

let solarSystem = getElementById('outputEl');

const solarSystem = require("./solarSystem");

const earth = solarSystem.earth;
const mercury = solarSystem.mercury;
const venus = solarSystem.venus;
const mars = solarSystem.mars;
const jupiter = solarSystem.jupiter;
const saturn = solarSystem.saturn;
const uranus = solarSystem.uranus;
const neptune = solarSystem.neptune;
const pluto = solarSystem.pluto;

const systemArray = earth.concat(mercury, venus, mars, jupiter, saturn, neptune, uranus, pluto);



// let domString = (solarSystem) =>{
// for(i = 0; i < solarSystem.length; i++){
// 	let planetString = "";
// 		planetString += `<div class="allPlanets">`;
// 		planetString += `<h2>${planet.Name[i]}</h2>`;
// 		planetString += `<h4>${planet.YearDiscovered[i]}</h4>`;
// 		planetString += `<h4>${planet.Mass[i]}</h4>`;
// 		planetString += `<h4>${planet.Size[i]}</h4>`;
// 		planetString += `<h4>${planet.DistanceFromSun[i]}</h4>`;
// 		planetString += `<h4>${planet.AtmosphereComposition[i]}</h4>`;
// 		planetString += `<h4>${planet.Satellites[i]}</h4>`;
// 		planetString += `<h4>${planet.Orbiters[i]}</h4>`;
// 		planetString += `</div>`;
// 	}
// 	return planetString;
// };

module.exports = systemArray; //will end up return planetString






