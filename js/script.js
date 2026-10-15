document.addEventListener("DOMContentLoaded", () => {
  const menuResponsivo = document.getElementById("menuResponsivo");
  const navMenu = document.getElementById("nav-menu");
  menuResponsivo.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  }); //fecha menu responsivo
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
  const slides = document.querySelectorAll(".carousel-slide");
  console.log("slide carrossel", slides);
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let slideAtual = 0;
  let slideIntervalo;
  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    console;
    dots.forEach((dot) => dot.classList.remove("active"));
    slideAtual = (index + slides.length) % slides.length;
    console.log("slide atual", slideAtual);
    slides[slideAtual].classList.add("active");
    console.log("slides", slides);
    console.log("dots", dots);
    dots[slideAtual].classList.add("active");
  }
  function nextSlide() {
    showSlide(slideAtual + 1);
  }
  function prevSlide() {
    showSlide(slideAtual - 1);
  }
  function startSlide() {
    slideIntervalo = setInterval(nextSlide, 5000);
  }
  function stopSlide() {
    clearInterval(slideIntervalo);
  }
  nextBtn.addEventListener("click", () => {
    nextSlide();
    stopSlide();
    startSlide();
  });
  prevBtn.addEventListener("click", () => {
    prevSlide();
    stopSlide();
    startSlide();
  });
}); //Final função evento