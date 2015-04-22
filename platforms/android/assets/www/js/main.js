var c, context, i;

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("picbtn").addEventListener("click", camera);
    //fetch an image
  //image must be from the same domain as the HTML page or you will get a security error and this will fail
  //load it into the Canvas
  i = document.createElement("img");
  c = document.getElementById('c');
  //good idea to set the size of the canvas in Javascript in addition to CSS
  c.height = 600;
  c.width = 800;
  context = c.getContext('2d');
  i.addEventListener("load", function(ev){
    //load to canvas after the image is loaded
    //in this sample the original is 300px x 430px
    //we want to resize it to fill the height of our canvas - 600px;
    //alert( i.width + " " + i.height)
    var imgWidth = ev.currentTarget.width;
    var imgHeight = ev.currentTarget.height;
    var aspectRatio = imgWidth / imgHeight;
    //alert(aspectRatio)
    ev.currentTarget.height = c.height;
    ev.currentTarget.width = c.height * aspectRatio;
    var w = i.width;
    var h = i.height;
    console.log("width: ", w, " height: ", h, " aspect ratio: ", aspectRatio);
    c.width = w;
    c.style.width = w + "px";
    context.drawImage(i, 0, 0, w, h);
    //drawImage(image, x-position, y-position, width, height)
  });
  i.crossOrigin = "Anonymous";
  //the crossOrigin property will let you use images from different domains IF the SERVER allows it
  //and if you are using Chrome or Firefox
  //https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
  i.src = "http://www.gq.com/images/entertainment/2013/01/bill-murray/bill-murray-300.jpg";

  document.getElementById("b").addEventListener("click", addText);

  
});

function addText(ev){
  var txt = document.getElementById("t").value;
  //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text
  if(txt != ""){
    //clear the canvas
    context.clearRect(0, 0, c.w, c.h);
    //reload the image
     var w = i.width;
    var h = i.height;
    context.drawImage(i, 0, 0, w, h);
    //THEN add the new text to the image
    var middle = c.width / 2;
    var bottom = c.height - 50;
    context.font = "30px sans-serif";
    context.fillStyle = "red";
    context.strokeStyle = "gold";
    context.textAlign = "center";
    context.fillText(txt, middle, bottom);
    context.strokeText(txt, middle, bottom);
  }
}

function camera(){

    document.getElementById("testp").innerHTML = ":)";
    
 

}

/////////////////////////////////////////////////////////////////////////////////////





