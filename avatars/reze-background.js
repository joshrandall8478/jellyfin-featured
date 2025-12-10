let folder = "reze/";
const limit = 7
const format = "jpg";

const mainRandom = Math.floor( Math.random() * limit ) + 1 ;

let image = folder + mainRandom + '.' + format;

document.getElementById("reze").src = image;