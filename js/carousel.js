let slideAtual = 0;
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
        slide.style.opacity = "0";
    });

    slides[index].classList.add("active");
    slides[index].style.opacity = "1";
}

function nextSlide() {
    slideAtual = (slideAtual + 1) % totalSlides;
    showSlide(slideAtual);
}

function prevSlide() {
    slideAtual = slideAtual === 0 ? totalSlides - 1 : slideAtual - 1;
    showSlide(slideAtual);
}

document.querySelector(".next-btn").addEventListener("click", nextSlide);
document.querySelector(".prev-btn").addEventListener("click", prevSlide);

showSlide(slideAtual);
