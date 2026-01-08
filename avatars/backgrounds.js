// jjk-s3
let folder = "jjks3/";
let limit = 4;
const format = "jpg";

let mainRandom = Math.floor(Math.random() * limit) + 1;

let image = folder + mainRandom + "." + format;

document.getElementById("jjks3").src = image;

// Reze
folder = "reze/";
limit = 8;


mainRandom = Math.floor(Math.random() * limit) + 1;

image = folder + mainRandom + "." + format;

document.getElementById("reze").src = image;
