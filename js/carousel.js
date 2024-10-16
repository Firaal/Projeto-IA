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
    slideAtual++;

    if (slideAtual >= totalSlides) {
        slideAtual = 0;
    }

    showSlide(slideAtual);
}

function prevSlide() {
    if (slideAtual === 0) {
        slideAtual = totalSlides - 1;
    } else {
        slideAtual--;
    }
    showSlide(slideAtual);
}

document.querySelector(".next-btn").addEventListener("click", nextSlide);
document.querySelector(".prev-btn").addEventListener("click", prevSlide);

showSlide(slideAtual);
