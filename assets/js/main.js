var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

$(document).ready(function() {
  setTimeout(()=>{
      $('#Preloader').addClass('loader');
  },1500);
  setTimeout(()=>{
      $('#Preloader').remove('loader');
  },4000);
})
