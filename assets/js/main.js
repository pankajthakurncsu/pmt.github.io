// Script for when click nav toggler outside on screen then navbar collapse
window.onload = function () {
	document.addEventListener("click", function (event) {
		// if the clicked element isn't child of the navbar, you must close it if is open
		if (!event.target.closest("#navbar") && document.getElementById("navbarNav").classList.contains("show")) {
			document.getElementById("menu_button").click();
		}
	});
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// Back to Top Button
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// End Back to Top Button

// // preloader
// $(document).ready(function() {
//     setTimeout(()=>{
//         $('#Preloader').addClass('loader');
//     },1000);
//     setTimeout(()=>{
//         $('#Preloader').remove('loader');
//     },500);
//   })


// preloader
// $(document).ready(function() {
//   setTimeout(()=>{
//       $('#Preloader').addClass('loader');
//   },300);
//   setTimeout(()=>{
//       $('#Preloader').remove('loader');
//   },150);
// })

// $('.navbar-nav>li>a').on('click', function(){
//   $('.navbar-collapse').collapse('hide');
// });



// $(document).ready(function() {
//   setTimeout(()=>{
//       $('#Preloader').addClass('loader');
//   },500);
//   setTimeout(()=>{
//       $('#Preloader').remove('loader');
//   },250);
// })

// $('.navbar-nav>li>a').on('click', function(){
//   $('.navbar-collapse').collapse('hide');
// });


// $(document).ready(function() {
//   setTimeout(()=>{
//       $('#Preloader').addClass('loader');
//   },220);
//   setTimeout(()=>{
//       $('#Preloader').remove('loader');
//   },110);
// })

// $('.navbar-nav>li>a').on('click', function(){
//   $('.navbar-collapse').collapse('hide');
// });




// $(document).ready(function() {
//   setTimeout(()=>{
//       $('#Preloader').addClass('loader');
//   },400);
//   setTimeout(()=>{
//       $('#Preloader').remove('loader');
//   },200);
// })




$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

// End preloader

function darkmode(){
  var SetTheme = document.body;

  SetTheme.classList.toggle("dark-mode");

  var theme;

  if(SetTheme.classList.contains("dark-mode")){
    console.log("Dark mode");
    theme = "DARK";
  } else {
    console.log("Light mode");
    theme = "LIGHT";
  }

  // save to localstorage
  localStorage.setItem("PageTheme", JSON.stringify(theme));
}
let GetTheme = JSON.parse(localStorage.getItem("PageTheme"))
console.log(GetTheme);


if(GetTheme == "DARK"){
  document.body.classList = "dark-mode";
}

