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