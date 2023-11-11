
var slider = document.getElementById('slider');

var slides = slider.getElementsByClassName('slide');

var slideIndex = 0;

function showSlide(){
	for(var i =0; i < slides.length; i++){
		slides[i].style.display = 'none';
	}
	slides[slideIndex].style.display = 'block';
}

function nextSlide(){
	slideIndex++;
	if(slideIndex >= slides.length){
		slideIndex = 0;
	}
	
	showSlide();
}
function prevSlide(){
	slideIndex--;
	if(slideIndex < 0){
		slideIndex = slides.length - 1;
	}
	showSlide();
}
showSlide();
setInterval(nextSlide,3000);



 function openMenu(){
	var menus = document.getElementById("sidebar");
	var close = document.getElementById("img");
   
	menus.style.display="block";
 }
 

 function closeMenu(){
	var menus = document.getElementById("sidebar");
	var close = document.getElementById("img");
   
	menus.style.display="none";
 }
 