allPictures();
function bigPicture (image){
     document.getElementById("gallery").innerHTML 
     = '<img onclick="allPictures()" class="bigPicture" src="pictures/gallery/tog' + image + '.png" alt="Image ' + image + '">';
}
function allPictures(){
     document.getElementById("gallery").innerHTML = null;
     for (let i = 1; i < 9; i++) 
{
     document.getElementById("gallery").innerHTML 
     += '<img onclick="bigPicture(' + i + ')" class="gallerifut" src="pictures/gallery/tog' + i + '.png" alt="Image ' + i + '">'; 
}
}