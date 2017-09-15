"use strict";

let outputEl = document.getElementById('outputEl');
let planetString = ``;
const SolarSystem = require("./solarSystem");

let mercury = SolarSystem.mercury();
let venus = SolarSystem.venus();
let earth = SolarSystem.earth();
let mars = SolarSystem.mars();
let jupiter = SolarSystem.jupiter();
let saturn = SolarSystem.saturn();
let uranus = SolarSystem.uranus();
let neptune = SolarSystem.neptune();
let pluto = SolarSystem.pluto();

let systemArray = earth.concat(mercury, venus, mars, jupiter, saturn, uranus, neptune, pluto);

let printPlanets = (planet) =>{
for(var i = 0; i < planet.length; i++){
		planetString += `<div>
							<h2>${planet[i].Name}</h2>
							<h4>${planet[i].YearDiscovered}</h4>
							<h4>${planet[i].Mass}</h4>
							<h4>${planet[i].Size}</h4>
							<h4>${planet[i].DistanceFromSun}</h4>
							<h4>${planet[i].AtmosphereComposition}</h4>
							<h4>${planet[i].Satellites}</h4>
							<h4>${planet[i].Orbiters}</h4>
						</div>`;
		}
};

printPlanets(systemArray);
module.exports = planetString; //will end up return planetString






