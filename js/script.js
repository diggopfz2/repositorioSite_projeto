document.addEventListener
("DOMContentLoaded",() => {
    const menuResponsivo = document.getElementById("menuResponsivo");
    const navMenu = document.getElementById("nav-menu");

    menuResponsivo.
    addEventListener("click",() =>{
        navMenu.classList.toggle("active");
    });

    const navLinks = document.
    querySelectorAll(".nav-menu a");
    navLinks.forEach((link) => {
        link.addEventListener("click", () =>{
        navMenu.classList.remove("active");
        });
    });
     
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let slideAtual = 0;
    let slideIntervalo;

    function showSlide(index){
        slides.forEach((slide) => 
        slide.classList.remove("active"));
        dots.forEach((dot) =>
        dot.classList.remove("active"));

        slideAtual = (index + slides.length) 
            % slides.length;
        
        slides[slideAtual].classList.add("active");
        dots[slideAtual].classList.add("active");

    }

    function nextSlide(){
        showSlide(slideAtual + 1);
    }

    function prevSlide(){
        showSlide(slideAtual - 1);
    }

    function startSlide(){
        slideIntervalo = setInterval(nextSlide,5000);
    }    

    function stopSlide(){
        console.log("Valor intervalo", slideIntervalo);
        clearInterval(slideIntervalo);
    }

    nextBtn.addEventListener("click", () => {
        nextSlide();
        stopSlide();
        startSlide();
    });

    prevBtn.addEventListener("click", () =>{
        prevSlide();
        stopSlide();
        startSlide();
    });
    
    dots.forEach((dot) =>{
        dot.addEventListener("click", (e) =>{
            const index = parseInt(e.target.getAttribute("data-index"));
            showSlide(index);
            stopSlide();
            startSlide();    
        });
    });

    startSlide();

    const contatoForm = document.getElementById("contatoForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");
   
    function isEmailValid(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    contatoForm.addEventListener("submit",(event) =>{
        event.preventDefault();

        clearError();

        let isValid = true;

        if(name.value.trim().length < 3)
        {
            showError(name,"O nome deve ter no mínimo três caracteres");
            isValid = false;
        }

        if(!isEmailValid(email.value.trim()))
        {
            showError(email,"Insira um e-mail válido");
            isValid = false;
        }

        if(mensagem.value.trim().length < 10)
        {
            showError(mensagem,"O campo deve ter no mínimo 10 caracteres");
            isValid = false;
        }

        if(isValid)
        {
            clearError();
            showToast("Mensagem enviado com sucesso");
            contatoForm.reset();
        }
    });

    function showToast(mensagem){
        const toast = document
            .getElementById("toast");
        const toastMensagem = document
            .getElementById("toastMensagem");
        
        toastMensagem.textContent = mensagem;
        toast.classList.add("show");

        setTimeout(() =>{
            toast.classList.remove("show");
        }, 3000);

    }

   [name, email, mensagem].forEach((input) =>{
    input.addEventListener("input", () =>{
        clearFieldError(input);
    });
   });

    function showError(inputElement, mensagem)
    {
        const formGroup = inputElement.parentElement;
        clearFieldError(inputElement);
        inputElement.classList.add("input-error");
        const erroMensagem = document.createElement("small");
        erroMensagem.className = "error-text";
        erroMensagem.innerText = mensagem;
        formGroup.appendChild(erroMensagem);
    }

    
    function clearFieldError(inputElement){
        const formGroup = inputElement.parentElement;
        inputElement.classList.remove("input-error");

        const removerErro = formGroup
            .querySelector("error-text");
        if(removerErro){
            removerErro.remove();
        }
    }

    function clearError()
    {
        document.querySelectorAll(".error-text")
            .forEach((el) => el.remove());

        document.querySelectorAll(".input-error")
            .forEach((el) => 
                el.classList.remove("input-error"));
    }






}); //Fechamento 