let slideAtual=0

const slides = document.querySelectorAll('.slide')
const quantidadeSlides = slides.length

function proximoSlide() {
    slides[slideAtual].style.display = 'none';
    slideAtual = (slideAtual + 1) % quantidadeSlides;
    slides[slideAtual].style.display = 'flex';
}

setInterval(proximoSlide, 3000);