let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle("move");
};
window.onscroll = () => {
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
}


// Email Js
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        } else {
            sendmail (name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_m8bonqe","template_wtg6f5w",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}

function emptyerror() {
    swal({
        title: "Oh No....!",
        text: "Fields can not be empty!",
        icon: "error",
        // icon: "success",
        // button: "error!",
      });
}

function success() {
    swal({
        title: "Email sent sucessfully!",
        text: "We try to replay in 24 hours!",
        icon: "success",
      });
}

// Header Background Change on Scrool
let Header = document.querySelector(".header")

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0);
});

// Scroll Top

let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});



// preloader
$(document).ready(function() {
    setTimeout(()=>{
        $('#Preloader').addClass('loader');
    },1000);
    setTimeout(()=>{
        $('#Preloader').remove('loader');
    },500);
  })
