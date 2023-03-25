const boxCities = document.querySelectorAll('.box-city')

boxCities.forEach((boxCity) =>{
    boxCity.addEventListener('mouseover', () =>{
        removeActiveClasses();
        boxCity.classList.add('active')
    }) 
    boxCity.addEventListener('mouseout', () =>{
        boxCity.classList.remove('active')
    }) 

})

function removeActiveClasses() {
    boxCities.forEach(boxCity => {
        boxCity.classList.remove('active')
    })
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carrossel-item");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
