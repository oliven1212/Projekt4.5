document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const images = gallery.getElementsByTagName("img");
    let currentIndex = 0;
  
    // Lyt til klik på billeder
    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener("click", function () {
        currentIndex = i;
        showImage();
      });
    }
  
    // Funktion til at vise det aktuelle billede
    function showImage() {
      for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
      }
  
      images[currentIndex].style.display = "block";
    }
  });
  