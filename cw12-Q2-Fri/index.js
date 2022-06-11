let slideIndex = 0;

let slide = document.getElementsByClassName("slider_slides");
console.log(slide);
let previous = document.querySelector(".previous");
let next = document.querySelector(".next");

function showSlides(){
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
  }
}

next.addEventListener('click' , function(e){
  slideIndex++;
  if( slideIndex > slide.length - 1){
    slideIndex = 0;
  }
  showSlides();
  slide[slideIndex].style.display = 'block';
})

previous.addEventListener('click' , function(e){
  slideIndex--;
  if( slideIndex < 0){
    slideIndex = slide.length - 1;
  }
  showSlides();
  slide[slideIndex].style.display = 'block';
})