// jjk-s3
let folder = "reze/";
let limit = 8;
const format = "jpg";

let mainRandom = Math.floor(Math.random() * limit) + 1;

let image = folder + mainRandom + "." + format;


document.getElementById("reze").src = image;
