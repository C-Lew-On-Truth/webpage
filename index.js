let videoBtn = document.querySelector(".video-btn");
let words = document.querySelector(".words");
let bio = document.querySelector(".bio");
let videos = document.querySelector(".videos");
let menu = document.querySelector(".menu");

menu.onclick = (ev) => {
  let target = ev.target.className;
  if (target === "videos") {
    window.location.href = "./videos.html";
  } else if (target === "bio") {
    window.location.href = "./about.html";
  }
};

words.innerHTML = "THANK YOU FOR LOOKING AT MY WEB PAGE!";


setTimeout(() => {
  words.style.opacity = "1";
}, 1000);

setTimeout(() => {
  words.style.opacity = "0"
}, 4000)
setTimeout(() => {
  words.hidden = true
}, 7000)

/*
setTimeout(() => {
  words.style.display = "none";
}, 8000);
*/

setTimeout(() => {
  bio.style.width = "95%";
  videos.style.width ="95%";
  bio.style.opacity = "1";
  videos.style.opacity = "1";
  bio.innerHTML = "BACKGROUND";
  videos.innerHTML = "DEMO REELS";
}, 7000);

//console.log("height is " + window.innerHeight);
//console.log("width is " + window.innerWidth);