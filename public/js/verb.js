var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);

 

document.querySelector("body").style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
document.querySelector(".quote").style.color = "rgb(" + r + ", " + g + ", " + b + ")";
document.querySelector(".by").style.color = "rgb(" + r + ", " + g + ", " + b + ")";
document.querySelector(".btn").style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";