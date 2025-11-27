var slides=document.getElementsByClassName("slide");
var slideIndex=0;

function showSlide(i){
    slideIndex=(i+slides.length)%slides.length;
    for(let s of slides)s.style.display="none";
    slides[slideIndex].style.display="block"
}
showSlide(0);
setInterval(()=> showSlide(slideIndex+1),2000)