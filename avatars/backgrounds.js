// Reze
let folder = "reze/";
let limit = 8
const format = "jpg";

let mainRandom = Math.floor( Math.random() * limit ) + 1 ;

let image = folder + mainRandom + '.' + format;

document.getElementById("reze").src = image;

// jjk-s3
folder = "jjks3/";
limit = 8;

mainRandom = Math.floor(Math.random() * limit) + 1;

image = folder + mainRandom + "." + format;

document.getElementById("jjks3").src = image;