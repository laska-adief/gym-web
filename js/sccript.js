const menuBtnEl = document.getElementById("menuBtn");
const linksEl = document.getElementById("links");

menuBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  menuBtnEl.classList.toggle("active");
  linksEl.classList.toggle("active");
  gsap.from(".link", {
    opacity: 0,
    x: 100,
    duration: 0.2,
    stagger: 0.1,
  });
});

gsap.from(".logo", { opacity: 0, x: -100, duration: 1, delay: 0.5 });

const pcSize = window.matchMedia("(min-width: 1280px)");

if (pcSize.matches) {
  gsap.from(".link", {
    opacity: 0,
    x: 100,
    duration: 1,
    delay: 0.8,
    stagger: 0.2,
  });
}

gsap.from(".menu", { opacity: 0, x: 100, duration: 1, delay: 0.5 });
gsap.from(".hero-subtext", { opacity: 0, y: -100, duration: 1, delay: 1.3 });
gsap.from(".hero-text", { opacity: 0, y: -100, duration: 1, delay: 1 });
gsap.from(".cta", { opacity: 0, scale: 0.1, duration: 1, delay: 0.8 });

gsap.from(".socmed-icon", {
  opacity: 0,
  x: -100,
  duration: 1,
  delay: 0.8,
  stagger: 0.2,
});
