
//Smooth-Scroll Script
const scroll = new SmoothScroll('.nav_links a[href*="#"]', {
	speed: 800
});

const scroll2 = new SmoothScroll('.nav_enter a[href*="#"]', {
	speed: 800
});

//When user scrolls the page, exec func
window.onscroll = function() {scrollHeader()};

//Get Header
var stickyHeader = document.getElementById("nav_sticky_header");

//Get Offset
var sticky = stickyHeader.offsetTop;

//Add sticky class when in scroll position/area
function scrollHeader() {
	if (window.pageYOffset > sticky) {
		stickyHeader.classList.add("sticky");
	}else{
		stickyHeader.classList.remove("sticky");
	}
}

//Get Modal Elements
var modal = document.getElementById('projectModal');

//Get Modal Buttons
var modalBtn1 = document.getElementById('modalBtn1');
var modalBtn2 = document.getElementById('modalBtn2');
var modalBtn3 = document.getElementById('modalBtn3');

//Get Modal Close Button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for Open Clicks
modalBtn1.addEventListener('click', setNum0);
modalBtn2.addEventListener('click', setNum1);
modalBtn3.addEventListener('click', setNum2);

//Listen for Close Click
closeBtn.addEventListener('click', closeModal);

//Listen for Close Click
window.addEventListener('click', closeModalOutsideClick);

//Hard Coded Info
//Image file paths
const imgPaths = [
		["img/Project_Previews/Proj1_Pics/dl_main.png","img/Project_Previews/Proj1_Pics/dl_settings.png","img/Project_Previews/Proj1_Pics/dl_lock.png"],
		["img/Project_Previews/Proj2_Pics/mangahomepage.jpg","img/Project_Previews/Proj2_Pics/loginacc.png","img/Project_Previews/Proj2_Pics/adminmenu.png"],
		["img/Project_Previews/Proj3_Pics/center.png","img/Project_Previews/Proj3_Pics/left.png","img/Project_Previews/Proj3_Pics/right.png"]
	];

const title = ["Daily Leaf","All Things Manga","WeatherMe"];
const info = ["An iOS application that is a motivational reminder for users to stay postive and insipred.  It allows users to create quotes, as well as select from famous quotes to receive every day.  The project was completed with Swift and SwiftUI.  It is currently on iOS app store.  Stay motivated!",
	"A full stack website that acts as an online store replica, allowing users to create accounts and shop around for manga. The website was designed to be user-friendly and easy to navigate, while providing an immersive shopping experience. The website was created with MySQL, Express and NodeJS. The team worked together to ensure that the website was responsive and intuitive.",
	"An iOS app that displays weather information such as pressure, humidity and much more for the city you are currently in."
	];

//Footer Titles and Links
const footerTitles = ["APPSTORE", "GITHUB", "GITHUB"];
const footerLinks = ["https://apps.apple.com/us/app/daily-leaf/id6445947088", 
	"https://github.com/JohnnieHuynh/All-Things-Manga", 
	"https://github.com/JohnnieHuynh/WeatherMe"
	];

//Project selector variable
var selector = -1;

//Set Numbers
function setNum0() {
	selector = 0;

	openModal();
}

function setNum1() {
	selector = 1;

	openModal();
}

function setNum2() {
	selector = 2;

	openModal();
}

//Open Modal
function openModal() {
	modal.style.display = 'flex';

	//Set HTML
	var tempTitle = document.getElementById('modal-title');
	var tempInfo = document.getElementById('modal-body-info');
	var tempFooter = document.getElementById('modal-footer-title');
	var tempImg1 = document.getElementById('modal-slide1');
	var tempImg2 = document.getElementById('modal-slide2');
	var tempImg3 = document.getElementById('modal-slide3');

	//Set Project Title, Description Text and images
	tempTitle.innerHTML = (title[selector]);
	tempInfo.innerHTML = (info[selector]);

	tempImg1.src = (imgPaths[selector][0]);
	tempImg2.src = (imgPaths[selector][1]);
	tempImg3.src = (imgPaths[selector][2]);

	//Set text and links to footer info
	tempFooter.setAttribute('href', footerLinks[selector]);
	tempFooter.innerText = footerTitles[selector];

	//Reset project pictures
	slideIndex = 1
	showSlides(1)


	//Disable body background scroll
	document.documentElement.style.overflow = 'hidden';
   	document.body.scroll = "no";

}

//Function: Close Modal
function closeModal() {
	modal.style.display = 'none';

	//Enable body background scroll
	document.documentElement.style.overflow = 'scroll';
   	document.body.scroll = "yes";

}

//Function: Close Modal From Outside Window
function closeModalOutsideClick(e) {
	if (e.target == modal) {
		modal.style.display = 'none';

		//Enable body background scroll
		document.documentElement.style.overflow = 'scroll';
   		document.body.scroll = "yes";

	}
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
