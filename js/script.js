/* Fotos Cities */

const boxCities = document.querySelectorAll(".box-city");

boxCities.forEach((boxCity) => {
  boxCity.addEventListener("mouseover", () => {
    removeActiveClasses();
    boxCity.classList.add("active");
  });
  boxCity.addEventListener("mouseout", () => {
    boxCity.classList.remove("active");
  });
});

function removeActiveClasses() {
  boxCities.forEach((boxCity) => {
    boxCity.classList.remove("active");
  });
}

/* Carrossel Vantagens Charlie */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carrossel-item");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/* Cliente Charlie*/
var itemsCliente = document.querySelectorAll(".item-cliente");

for (var i = 0; i < itemsCliente.length; i++) {
  itemsCliente[i].addEventListener("click", function() {
    var isActive = this.classList.contains("active");

    if (!isActive) {
      this.classList.add("active");
      this.querySelector("p").classList.add("strike");
    } else {
      this.classList.remove("active");
      var pElement = this.querySelector("p");
      pElement.classList.add("unstrike");
      pElement.addEventListener("animationend", function() {
        pElement.classList.remove("unstrike");
        pElement.classList.remove("strike");
      }, {once: true});
    }
  });
}

/* FAQ */

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));


/* Function Forms*/

(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "gcomffkrnr");
