const el = document.querySelector("#pageOne");
const container = document.querySelector("#pageOne");

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX * 0.05 + "px";
  el.style.backgroundPositionY = -e.offsetY * 0.05 + "px";
});

container.addEventListener("mouseenter", function() {
  
  setTimeout(function() {
    mover.classList.add("no-more-slidey");
    container.removeEventListener("mouseenter");
  }, 500);
  
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
window.addEventListener("scroll", reveal);