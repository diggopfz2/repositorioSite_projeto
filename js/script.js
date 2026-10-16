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
  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const index = parseInt(e.target.getAttribute("data-index"));
      showSlide(index);
      stopSlide();
      startSlide();
    });
  });
  startSlide();

  const contatoForm = document.getElementById("contatoForm")
  const nome =document.getElementById("nome")
  const email =document.getElementById("email")
  const mensagem = document.getElementById("mensagem")

  function isValidEmail(email){
    const emailRegex= 
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/;
   return emailRegex.test(email);
  }

  contatoForm.addEventListener("submit",(event) => {
    event.preventDefault();

    function showError(inputElement, mensagem){
      const formGroup = inputElement.parentElement;

      inputElement.classList.add("input-error");
      const errorMensagem = document.createElement("small");
      errorMensagem.className ="error-text";
      errorMensagem.innerText = mensagem;
      formGroup.appendChild(errorMensagem);
      
      
    }

    let isvalid = true;

    if(nome.value.trim().length < 3)
    {
      showError(nome,"O nome deve ter no minimo 3 caracteres");
      isvalid = false;
    }

    if (!isvalidEmail(email.value.trim()))
    {
      showError(email,"Insira um e-mail válido");
      isValid = false;
    }
    if(mensagem.value.trim().lenght <10)
    {
      showError(mensagem,"A Mensagem deve ter no minimo 10 caracteres");
      isvalid = false;
    }
    if(isvalid)
    {
      clearError();
      alert("mensagem enviada com sucesso");
      contatoForm.reset();
    }
  });
}); //Final função evento
