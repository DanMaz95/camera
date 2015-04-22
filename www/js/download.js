document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("b").addEventListener("click", fetchImg);
});

function fetchImg(ev){
	var url = "http://faculty.edumedia.ca/griffis/mad9022/final-w15/list.php?dev=234234";
	sendRequest(url, imgReturned, null);
    document.getElementById("test").innerHTML = "fetch";
}

function imgReturned(xhr){
	var json = JSON.parse(xhr.responseText);
//	alert(json.id);
    console.log(xhr.responseText);
    document.getElementById("test").innerHTML = "return";
    
    for(var i=0; i < json.thumbnails.length; i++){
        var img = document.createElement("img");
	    img.src = decodeURI(json.thumbnails[i].data);
        img.style.width = "180px";
        img.id = "loads";
        
        
        document.getElementById("loaded").appendChild(img);
    }
    document.getElementById("test").innerHTML = "for";
} 