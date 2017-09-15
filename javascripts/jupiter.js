"use strict";

const jupiter = () => {
	const Details = [{
		Name: "Jupiter";
		YearDiscovered: "1610";
		Mass: "1.898 × 10^27 kg";
		Size: "43,441 mi";
		DistanceFromSun: "483.8 million mi";
		AtmosphereComposition: "hydrogen and helium";
		Satellites: "Europa, Io, Ganymeade"
		Orbiters: "Galileo"
		}];
	console.log("jupiter", jupiter);
	return Details;
}
		
module.export = jupiter()
console.log("I'm on Jupiter");