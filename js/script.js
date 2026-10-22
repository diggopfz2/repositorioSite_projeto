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
  const contato = document.getElementById("contato");
  const nome = document.getElementById("name");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  contato.addEventListener("submit", (event) => {
    event.preventDefault();
    clear
    let isValid = true;
    //Validação do campo nome(verificar mínimo 3 caracteres)
    if (nome.value.trim().length < 3) {
      showError(nome, "o nome deve ter no mínimo 3 caracteres");
      isValid = false;
    }
    //Validação do campo email
    if (!IsValidEmail(email.value.trim())) {
      showError(email, "Insira um email válido");
      IsValidEmail = False;
    }
    //Validação do campo mensagem
    if (mensagem.value.trim().length < 10) {
      showError(mensagem, "A mensagem deve ter no mínimo 10 caracteres");
      isValid = false;
    }
    //Validar se tudo estiver correto
    if (isValid) {
      clearError();
      alert("Mensagem enviado com sucesso");
      contato.reset();
    }
  });
  //remover borda vermelha
  [nome, email, mensagem].forEach((input) =>{
    input.addEventListener("input", () => {
      clearFieldError(input);
  })});
  function showError(inputElement, mensagem) {
    const formGroup = inputElement.parentElement();
    clearFieldError(inputElement);
    inputElement.classlist.add("input-error");
    const errorMensagem = document.createElement("small");
    errorMensagem.className = "error-text";
    errorMensagem.innerText = mensagem;
    formGroup.appendChild(errorMensagem);
  }
  function clearFieldError(inputElement) {
    const formGroup = inputElement.parentElement;
    inputElement.classlist.remove("input-error");
    const removerErro = formGroup.querySelector("error-text");
    if (removerErro) {
      removerErro.remove();
    }
    function clearError() {
      document.querySelectorAll(".error-text").forEach((el) => el.remove());
      document
        .querySelectorAll(".input-error")
        .forEach((el) => el.classList.remove("input-error"));
    }
  }
    function showToast(mensagem){
      const toast = document.getElementById("toast");
      const toastMensagem = document.getElementById("toastMensagem");

      toastMensagem.textContent = mensagem;
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      },3000);
    }
}); //Final função evento

