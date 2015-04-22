//upload.js
var i, full, thumb, w, h, aspectRatio, c;

document.addEventListener("DOMContentLoaded", function( ){
//setup
//fetch the image
//load it at two sizes into the two canvases
//full = document.getElementById("full");
//thumb = document.getElementById("thumb");
//i = document.createElement("img");
//i.addEventListener("load", setCanvas);
//i.src = document.getElementById("smallImage").src;

document.getElementById("b3").addEventListener("click", upload);
});

function setCanvas(ev){
//	thumb.style.height = "200px";
//	var tw = 200 * aspectRatio;
//	thumb.width = tw;
//	thumb.style.width = tw + "px";
//	i.width = tw;
//	i.height = 200;
//	var ctT = thumb.getContext('2d');
//	ctT.drawImage(i, 0, 0, tw, 200);
}

function upload(ev){
document.getElementById("uuid").innerHTML = "test";
var myCanvas = document.getElementById("c");
var fullpng = myCanvas.toDataURL("image/png");   
var thumbpng = myCanvas.toDataURL("image/png");
fullpng = encodeURIComponent( fullpng );
thumbpng = encodeURIComponent( thumbpng );
var url = "http://faculty.edumedia.ca/griffis/mad9022/final-w15/save.php";
var postData = "dev=" + device.uuid + "&thumb=" + thumbpng + "&img=" + fullpng;
sendRequest(url, imgSaved, postData);
}

function imgSaved(xhr){
document.getElementById("uuid").innerHTML = xhr.responseText;
}