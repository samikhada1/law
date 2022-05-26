/* const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
            }
        });
    });
}
*/
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


navSlide();

function initMap() {
    var location = {lat: 41.270303, lng: 69.167140};
    var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: location
});
}