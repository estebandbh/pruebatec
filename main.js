  
window.addEventListener('load', function() {

    setTimeout(() => {
        
        document.body.classList.add('loaded');
        var preloader = document.getElementById("preloader");
        preloader.style.display = 'none';
    }, 2000);
  });
  
  
  
  
  
  
  let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides( indice+=n );
}

function posicionSlide(n){
    muestraSlides(indice=n);
}
setInterval(function tiempo(){
    muestraSlides(indice+=1)
},4000);
function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('miSlider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';

}


let tl = gsap.timeline({paused: true});
const navBtn = document.querySelector(".menu-toggle-btn");
navBtn.onclick = function (e) {
  navBtn.classList.toggle("active");
  tl.reversed(!tl.reversed());
};

tl.to(".nav__responsive", {
  x: 0,
  duration: 0.4,
  ease: Power3.InOut,
  stagger: 0.03
})

tl.to(".logo a, .place span",{
  color: "#fff",
  ease: Power2.inOut,
  duration: 0.2
})

tl.from(".container__responsive ul li a", {
  y: "100%",
  ease: Power3.Inout,
  stagger: 0.1,
  duration: 0.5
}).reverse();