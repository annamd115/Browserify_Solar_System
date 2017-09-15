"use strict";

const neptune = () => {
	const Details = [{
		Name: "Neptune",
		YearDiscovered: "1846",
		Mass: "1.024 × 10^26 kg",
		Size: "15,299 mi",
		DistanceFromSun: "2.795 billion mi",
		AtmosphereComposition: "Hydrogen, Helium, and Methane",
		Satellites: "Triton, Nereid, and Proteus",
		Orbiters: "N/A"
		}];
	console.log("neptune", neptune);
	return Details;
};
		
module.export = neptune;
console.log("I'm on Neptune");