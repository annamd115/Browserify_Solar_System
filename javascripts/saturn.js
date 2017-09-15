"use strict";

const saturn = () => {
	const Details = [{
		Name: "Saturn";
		YearDiscovered: "1610";
		Mass: "5.683 × 10^26 kg";
		Size: "36,184 mi";
		DistanceFromSun: "888.2 million mi";
		AtmosphereComposition: "hydrogen and helium";
		Satellites: "Enceladus, Titan, and Tethys";
		Orbiters: "Titan Probe (SOTP)"
		}];
	console.log("saturn", saturn);
	return Details;

}
		
module.export = saturn()
console.log("I'm on Saturn");