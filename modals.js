var imageInc = 3;
var closeInc = 5;

/********** recipez **********/
// Get the modal, display it when clicked
var modalRecipEZ = document.getElementById("modal-recipez");
var imageRecipEZ = document.getElementById("image-recipez");
imageRecipEZ.addEventListener("click", function(){
  displayBlock(modalRecipEZ);
  images = document.getElementsByClassName("images-recipez");
  slideIndex = 1;
  document.getElementsByClassName("prev")[0].onclick = function() {
    moveImages(-1);
  }
  document.getElementsByClassName("next")[0].onclick = function() {
    moveImages(1);
  }
  showImage(slideIndex);
});
// close the modal after clicking "x"
var closeRecipEZ = document.getElementsByClassName("close")[0];
closeRecipEZ.onclick = function() {
  closeModal(modalRecipEZ);
}

/********** capstone **********/
// Get the modal, display it when clicked
var modalCapstone = document.getElementById("modal-capstone");
var imageCapstone = document.getElementById("image-capstone");
imageCapstone.addEventListener("click", function(){
  displayBlock(modalCapstone);
  images = document.getElementsByClassName("images-capstone");
  slideIndex = 1;
  showImage(slideIndex);
});
// close the modal after clicking "x"
var closeACiibo = document.getElementsByClassName("close")[1];
closeACiibo.onclick = function() {
  closeModal(modalCapstone);
}

/********** bokeh **********/
// Get the modal, display it when clicked
var modalBokeh = document.getElementById("modal-bokeh");
var imageBokeh = document.getElementById("image-bokeh");
imageBokeh.addEventListener("click", function(){
  displayBlock(modalBokeh);
  images = document.getElementsByClassName("images-bokeh");
  slideIndex = 1;
  document.getElementsByClassName("prev")[1].onclick = function() {
    moveImages(-1);
  }
  document.getElementsByClassName("next")[1].onclick = function() {
    moveImages(1);
  }
  showImage(slideIndex);
});
// close the modal after clicking "x"
var closeACiibo = document.getElementsByClassName("close")[2];
closeACiibo.onclick = function() {
  closeModal(modalBokeh);
}

/********** UofT Planning and Exploration Tool **********/
// Get the modal, display it when clicked
var modalPET = document.getElementById("modal-pet");
var imagePET = document.getElementById("image-pet");
imagePET.addEventListener("click", function(){
  displayBlock(modalPET);
  images = document.getElementsByClassName("images-pet");
  slideIndex = 1;
  showImage(slideIndex);
});
// close the modal after clicking "x"
var closePET = document.getElementsByClassName("close")[3];
closePET.onclick = function() {
  closeModal(modalPET);
}

/********** aciibo **********/
// Get the modal, display it when clicked
var modalACiibo = document.getElementById("modal-aciibo");
var imageACiibo = document.getElementById("image-aciibo");
imageACiibo.addEventListener("click", function(){
  displayBlock(modalACiibo);
  images = document.getElementsByClassName("images-aciibo");
  slideIndex = 1;
  document.getElementsByClassName("prev")[2].onclick = function() {
    moveImages(-1);
  }
  document.getElementsByClassName("next")[2].onclick = function() {
    moveImages(1);
  }
  showImage(slideIndex);
});
// close the modal after clicking "x"
var closeACiibo = document.getElementsByClassName("close")[4];
closeACiibo.onclick = function() {
  closeModal(modalACiibo);
}

/********** snake game **********/
// Get the modal, display it when clicked
var modalSnakeGame = document.getElementById("modal-snake-game");
var imageSnakeGame = document.getElementById("image-snake-game");
imageSnakeGame.addEventListener("click", function(){
  displayBlock(modalSnakeGame);
  images = document.getElementsByClassName("images-snake-game");
  slideIndex = 1;
  document.getElementsByClassName("prev")[0+imageInc].onclick = function() {
    moveImages(-1);
  }
  document.getElementsByClassName("next")[0+imageInc].onclick = function() {
    moveImages(1);
  }
  showImage(slideIndex);
});
// close the modal after clicking "x"
var closeSnakeGame = document.getElementsByClassName("close")[0+closeInc];
closeSnakeGame.onclick = function() {
  closeModal(modalSnakeGame);
}

/********** econ calculator **********/
// Get the modal, display it when clicked
var modalEcon = document.getElementById("modal-econ-calc");
var imageEcon = document.getElementById("image-econ-calc");
imageEcon.addEventListener("click", function(){
  displayBlock(modalEcon);
  // navigates the image when "<" or ">" is pressed
  images = document.getElementsByClassName("images-econ");
  slideIndex = 1;
  document.getElementsByClassName("prev")[1+imageInc].onclick = function() {
    moveImages(-1);
  }
  document.getElementsByClassName("next")[1+imageInc].onclick = function() {
    moveImages(1);
  }
  showImage(slideIndex);
});
// close the modal after clicking "x"
var closeEcon = document.getElementsByClassName("close")[1+closeInc];
closeEcon.onclick = function() {
  closeModal(modalEcon);
}

/********** age estimation **********/
// Get the modal, display it when clicked
var modalAgeEst = document.getElementById("modal-age-est");
var imageAgeEst = document.getElementById("image-age-est");
imageAgeEst.addEventListener("click", function(){
  displayBlock(modalAgeEst);
  // navigates the image when "<" or ">" is pressed
  images = document.getElementsByClassName("images-age");
  slideIndex = 1;
  document.getElementsByClassName("prev")[2+imageInc].onclick = function() {
    moveImages(-1);
  }
  document.getElementsByClassName("next")[2+imageInc].onclick = function() {
    moveImages(1);
  }
  showImage(slideIndex);
});
// close the modal after clicking "x"
var closeAgeEst = document.getElementsByClassName("close")[2+closeInc];
closeAgeEst.onclick = function() {
  closeModal(modalAgeEst);
}

/********** utek2020 **********/
// Get the modal, display it when clicked
var modalUtek2020 = document.getElementById("modal-utek2020");
var imageUtek2020 = document.getElementById("image-utek2020");
imageUtek2020.addEventListener("click", function(){
  displayBlock(modalUtek2020);
  // navigates the image when "<" or ">" is pressed
  images = document.getElementsByClassName("images-utek2020");
  slideIndex = 1;
  document.getElementsByClassName("prev")[3+imageInc].onclick = function() {
    moveImages(-1);
  }
  document.getElementsByClassName("next")[3+imageInc].onclick = function() {
    moveImages(1);
  }
  showImage(slideIndex);
});
// close the modal after clicking "x"
var closeUtek2020 = document.getElementsByClassName("close")[3+closeInc];
closeUtek2020.onclick = function() {
  closeModal(modalUtek2020);
}

/********** seek2019 **********/
// Get the modal, display it when clicked
var modalSeek2019 = document.getElementById("modal-seek2019");
var imageSeek2019 = document.getElementById("image-seek2019");
imageSeek2019.addEventListener("click", function(){
  displayBlock(modalSeek2019);
  // navigates the image when "<" or ">" is pressed
  images = document.getElementsByClassName("images-seek2019");
  slideIndex = 1;
  document.getElementsByClassName("prev")[4+imageInc].onclick = function() {
    moveImages(-1);
  }
  document.getElementsByClassName("next")[4+imageInc].onclick = function() {
    moveImages(1);
  }
  showImage(slideIndex);
});
// close the modal after clicking "x"
var closeSeek2019 = document.getElementsByClassName("close")[4+closeInc];
closeSeek2019.onclick = function() {
  closeModal(modalSeek2019);
}

/********** utrahacks **********/
// Get the modal, display it when clicked
var modalUtrahacks = document.getElementById("modal-utrahacks");
var imageUtrahacks = document.getElementById("image-utrahacks");
imageUtrahacks.addEventListener("click", function(){
  displayBlock(modalUtrahacks);
  // navigates the image when "<" or ">" is pressed
  images = document.getElementsByClassName("images-utrahacks");
  slideIndex = 1;
  document.getElementsByClassName("prev")[5+imageInc].onclick = function() {
    moveImages(-1);
  }
  document.getElementsByClassName("next")[5+imageInc].onclick = function() {
    moveImages(1);
  }
  showImage(slideIndex);
});
// close the modal after clicking "x"
var closeUtrahacks = document.getElementsByClassName("close")[5+closeInc];
closeUtrahacks.onclick = function() {
  closeModal(modalUtrahacks);
}

/********** mapper **********/
// Get the modal, display it when clicked
var modalMapper = document.getElementById("modal-mapper");
var imageMapper = document.getElementById("image-mapper");
imageMapper.addEventListener("click", function(){
  displayBlock(modalMapper);
  // navigates the image when "<" or ">" is pressed
  images = document.getElementsByClassName("images-mapper");
  slideIndex = 1;
  document.getElementsByClassName("prev")[6+imageInc].onclick = function() {
    moveImages(-1);
  }
  document.getElementsByClassName("next")[6+imageInc].onclick = function() {
    moveImages(1);
  }
  showImage(slideIndex);
});
// close the modal after clicking "x"
var closeMapper = document.getElementsByClassName("close")[6+closeInc];
closeMapper.onclick = function() {
  closeModal(modalMapper);
}

/********** Say the Colour Not the Word **********/
// Get the modal, display it when clicked
var modalSayColour = document.getElementById("modal-say-colour");
var imageSayColour = document.getElementById("image-say-colour");
imageSayColour.addEventListener("click", function(){
  displayBlock(modalSayColour);
  images = document.getElementsByClassName("images-colour");
  slideIndex = 1;
  showImage(slideIndex);
});
// close the modal after clicking "x"
var closeSayColour = document.getElementsByClassName("close")[7+closeInc];
closeSayColour.onclick = function() {
  closeModal(modalSayColour);
}

/********** Sokoban Game **********/
// Get the modal, display it when clicked
var modalSokoban = document.getElementById("modal-sokoban");
var imageSokoban = document.getElementById("image-sokoban");
imageSokoban.addEventListener("click", function(){
  displayBlock(modalSokoban);
  // navigates the image when "<" or ">" is pressed
  images = document.getElementsByClassName("images-sokoban");
  slideIndex = 1;
  document.getElementsByClassName("prev")[7+imageInc].onclick = function() {
    moveImages(-1);
  }
  document.getElementsByClassName("next")[7+imageInc].onclick = function() {
    moveImages(1);
  }
  showImage(slideIndex);
});
// close the modal after clicking "x"
var closeSokoban = document.getElementsByClassName("close")[8+closeInc];
closeSokoban.onclick = function() {
  closeModal(modalSokoban);
}


/********** template **********/
/* CHANGE "MEOW" TO UR THING

// Get the modal, display it when clicked
var modalMeow = document.getElementById("modal-meow");
var imageMeow = document.getElementById("image-meow");
imageMeow.addEventListener("click", function(){
  displayBlock(modalMeow);
  // navigates the image when "<" or ">" is pressed
  images = document.getElementsByClassName("images-meow");
  slideIndex = 1;
  document.getElementsByClassName("prev")[999999].onclick = function() {
    moveImages(-1);
  }
  document.getElementsByClassName("next")[999999].onclick = function() {
    moveImages(1);
  }
  showImage(slideIndex);
});
// close the modal after clicking "x"
var closeMeow = document.getElementsByClassName("close")[999999999];
closeMapper.onclick = function() {
  closeModal(modalMeow);
}

 */

// if user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalRecipEZ) {closeModal(modalRecipEZ);}
  else if (event.target == modalBokeh) {closeModal(modalBokeh);}
  else if (event.target == modalCapstone) {closeModal(modalCapstone);}
  else if (event.target == modalPET) {closeModal(modalPET);}
  else if (event.target == modalACiibo) {closeModal(modalACiibo);}
  else if (event.target == modalSnakeGame) {closeModal(modalSnakeGame);}
  else if (event.target == modalEcon) {closeModal(modalEcon);}
  else if (event.target == modalAgeEst) {closeModal(modalAgeEst);}
  else if (event.target == modalUtek2020) {closeModal(modalUtek2020);}
  else if (event.target == modalSeek2019) {closeModal(modalSeek2019);}
  else if (event.target == modalUtrahacks) {closeModal(modalUtrahacks);}
  else if (event.target == modalMapper) {closeModal(modalMapper);}
  else if (event.target == modalSayColour) {closeModal(modalSayColour);}
  else if (event.target == modalSokoban) {closeModal(modalSokoban);}

  /********** template **********/
  /* CHANGE "MEOW" TO UR THING
  else if (event.target == modalMeow) {closeModal(modalMeow);}
   */
}

function displayBlock(modal) {
  modal.style.display = "flex";
}

function closeModal (modal) {
  modal.style.display = "none";
}

function moveImages(n) {
    showImage(slideIndex+=n);
}

function showImage(n) {
    var i;

    /* so that it can loop in cycles */
    if (n > images.length) {slideIndex = 1}
    if (n < 1) {slideIndex = images.length}

    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";  
    }

    images[slideIndex-1].style.display = "flex";
}
