const listAnim = [...document.querySelectorAll(".animate")];
const navbar = document.querySelector(".navbar");

const observer = new IntersectionObserver(funanim, {
  rootMargin: "-10%",
  threshold: 0.0,
});

function funanim(entrys) {
  entrys.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}

listAnim.forEach((list) => {
  observer.observe(list);
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    navbar.classList.replace("bg-transparent", "bg-purple");
  } else {
    navbar.classList.replace("bg-purple", "bg-transparent");
  }
});

function showBg() {
  if (window.pageYOffset < 100) {
    if (navbar.classList.contains("bg-transparent")) {
      navbar.classList.replace("bg-transparent", "bg-purple");
    } else {
      navbar.classList.replace("bg-purple", "bg-transparent");
    }
  }
}

function toTop() {
  if (window.innerHeight > 700) {
    window.scrollTo(0, 0);
  }
}
