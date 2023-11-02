
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

 

function handleSubmit(event){
	event.preventDefault();
}

function add(){

	let companyName = prompt("Enter Company-Name:");
	let servicePrice = prompt("Enter Service-Price:");


	let newItem =document.createElement('li');
newItem.innerHTML= companyName + ' -Ugx'+ servicePrice;
document.getElementById('item').appendChild(newItem);
}



 var menus = document.getElementById("sidebar");
var menuBtn =document.getElementById("img");
menuBtn.addEventListener(click,()=>{
	menus.style.display="none";
});