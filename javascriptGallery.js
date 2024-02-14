//Galleri
allPictures();
function bigPicture (image){
     document.getElementById("gallery").innerHTML 
     = '<img onclick="allPictures()" class="bigPicture" src="pictures/gallery/tog' + image + '.png" alt="Image ' + image + '">';
}
function allPictures(){
     document.getElementById("gallery").innerHTML = null;
     for (let i = 0; i < 8; i++) {
          document.getElementById("gallery").innerHTML 
          += '<img onclick="bigPicture(' + i + ')" class="gallerifut" src="pictures/gallery/tog' + i + '.png" alt="Image ' + i + '">'; 
     }
}


//Galleri søge funktion
const category = ["Alle","Tog","Personer","Logo"];
const picturess = ["Logo","Tog","Personer","Personer","Tog","Tog","Personer","Tog"];

for (let i = 0; i < category.length; i++) {
     document.getElementById("options").innerHTML += '<option value="' + category[i] + '">' + category[i] + '</option>';
}

function search(){
     document.getElementById("gallery").innerHTML = null;
     if(document.getElementById("options").value === category[0]){
          for (let i = 0; i < picturess.length; i++) {
               document.getElementById("gallery").innerHTML 
               += '<img onclick="bigPicture(' + i + ')" class="gallerifut" src="pictures/gallery/tog' + i + '.png" alt="Image ' + i + '">'; 
          }

     }else{
          for (let i = 0; i < picturess.length; i++) {
               if (document.getElementById("options").value === picturess[i]){
                    document.getElementById("gallery").innerHTML += '<img onclick="bigPicture(' + i + ')" class="gallerifut" src="pictures/gallery/tog' + i + '.png" alt="Image ' + i + '">';
               }
          }
     }
}
