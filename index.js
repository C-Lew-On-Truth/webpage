let videoBtn = document.querySelector(".video-btn");
let words = document.querySelector(".words");
let bio = document.querySelector(".bio")
let videos = document.querySelector(".videos");
let menu = document.querySelector(".menu")

menu.onclick = (ev) => { 
  let target = ev.target.className
  if(target === 'videos') {
    window.location.href = "./videos.html"
  } else if(target === 'bio') {
    window.location.href = './about.html'
  }
  
};

window.onload = () => { words.style.opacity = "1" };

setTimeout(() => { words.style.opacity = "0" }, 4000);

//setTimeout(() => { words.style.display = "none"}, 8000);

setTimeout(() => { 
  bio.style.opacity = "1" 
  videos.style.opacity = "1"
}, 6000);

console.log("height is " + window.innerHeight);
console.log("width is " + window.innerWidth);
