function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.querySelector("#myTopnav").style.backgroundColor = "#fff";
//     document.querySelector("#myTopnav").style.padding = "10px 70px 10px 170px" ;
//     document.querySelector("#myTopnav").style.height = "15vh";
//     document.querySelector("#myLogo").style.height = "100px";
//     document.querySelector(".nav-1").style.fontSize = "18px";
//     document.querySelector(".nav-2").style.fontSize = "18px";
//     document.querySelector(".nav-3").style.fontSize = "18px";
//     document.querySelector(".nav-4").style.fontSize = "18px";
//     document.querySelector(".nav-5").style.fontSize = "18px";
//   } else {
//     document.querySelector("#myTopnav").style.padding = "10px 70px";
//     document.querySelector("#myTopnav").style.height = "25vh";
//     document.querySelector("#myTopnav").style.backgroundColor = "white";
//     document.querySelector("#myLogo").style.height = "150px";
//     document.querySelector(".nav-1").style.fontSize = "20px";
//     document.querySelector(".nav-2").style.fontSize = "20px";
//     document.querySelector(".nav-3").style.fontSize = "20px";
//     document.querySelector(".nav-4").style.fontSize = "20px";
//     document.querySelector(".nav-5").style.fontSize = "20px";
//   }
// }

// const logoAnim = document.querySelector('.logo');
// const navAnim = document.querySelector('.nav-1');
// const navAnim2 = document.querySelector('.nav-2');
// const navAnim3 = document.querySelector('.nav-3');
// const navAnim4 = document.querySelector('.nav-4');
// const navAnim5 = document.querySelector('.nav-5');
// const shop = document.querySelector('.icons');
// const titreAnim = document.querySelector('h1');
// const sousTitre = document.querySelector('h4');
// const bouTon = document.querySelector('.btn');

// const TL1 = new TimelineMax({paused: true});

// TL1 
// .from(logoAnim, 1, {x: 50, opacity: 0})
// .from(navAnim, 1, {y: 50, opacity: 0})
// .from(navAnim2, 1, {y: 50, opacity: 0}, '-=0.5')
// .from(navAnim3, 1, {y: 50, opacity: 0}, '-=0.5')
// .from(navAnim4, 1, {y: 50, opacity: 0}, '-=0.5')
// .from(navAnim5, 1, {y: 50, opacity: 0}, '-=0.5')
// .from(shop, 1, {x: 20, opacity: 0}, '-=0.5')
// .from(titreAnim, 1, {x: 100, opacity: 0}, '-=0.7')
// .from(sousTitre, 1, {opacity: 0}, '-=0.7')
// .from(bouTon, 1, {x: -100, opacity: 0}, '-=0.7')

// TL1.play();

AOS.init({
  duration: 1500
});