"use strict";

const mercury = require("./mercury");
const venus = require("./venus");
const earth = require("./earth");
const mars = require("./mars");
const jupiter = require("./jupiter");
const saturn = require("./saturn");
const uranus = require("./uranus");
const neptune = require("./neptune");
const pluto = require("./pluto");

const output = document.getElementById('domElement');

mercury(output);
venus(output);
earth(output);
mars(output);
jupiter(output);
saturn(output);
uranus(output);
neptune(output);
pluto(output);
