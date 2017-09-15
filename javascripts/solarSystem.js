console.log("I'm in solarSystem.js");

const earth = require("./earth");
const mars = require("./mars");
const mercury = require("./mercury");
const venus = require("./venus");
const jupiter = require("./jupiter");
const neptune = require("./neptune");
const uranus = require("./uranus");
const saturn = require("./saturn");
const pluto = require("./pluto");

const solarSystem = {
	mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto
};

module.exports = solarSystem;


