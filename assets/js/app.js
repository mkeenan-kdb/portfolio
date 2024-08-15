// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const bioImgs = ['michael5.png', 'michael2.png', 'michael4.png'];

const navHeight = document.querySelector("nav").offsetHeight;

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

function sendMail() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var msg = document.getElementById('message').value;
  console.log(name, email, msg);
    var link = "mailto:michael18ball@gmail.com?"
             + "subject=" + encodeURIComponent(name+" | portfolio")
             + "&body=" + encodeURIComponent(msg)
    ;
    window.location.href = link;
}

function scrollToId(elemid){
  var topH = document.getElementById(elemid).offsetTop - navHeight;
  window.scrollTo({
    top: topH,
    left: 0,
    behavior: "smooth",
  });
}

setInterval(function () {
  var currImg = document.getElementById("bioImg");
  var imgSrc = currImg.src.split("/");
  var idx = bioImgs.indexOf(imgSrc[imgSrc.length-1]);
  var newImg = bioImgs[idx+1];
  console.log(bioImgs[idx+1]);
  if(newImg == undefined)newImg = bioImgs[0];
  imgSrc[imgSrc.length-1] = newImg;
  imgSrc = imgSrc.join("/");
  currImg.src = imgSrc;
  currImg.classList.remove("animate__animated");
  currImg.classList.remove("animate__pulse");
  setTimeout(function () {
    currImg.classList.add("animate__animated");
    currImg.classList.add("animate__pulse");
  }, 20);
  console.log(imgSrc);
}, 5000);
