let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const thumbnails = document.querySelectorAll('.thumbnail');
const slideInterval = 3069; // Intervalo em milissegundos (1.69 segundos)

// Função para exibir o slide atual
function showSlide(index) {
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }

    // Oculta todos os slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Remove a classe active de todas as miniaturas
    thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove('active');
    });

    // Exibe o slide atual e marca a miniatura correspondente como ativa
    slides[slideIndex].style.display = 'block';
    thumbnails[slideIndex].classList.add('active');
}

// Função para avançar para o próximo slide
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Função para voltar para o slide anterior
function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Função para exibir o slide correspondente à miniatura clicada
function currentSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}

// Inicializa o carrossel e define o intervalo de atualização automática
showSlide(slideIndex);
setInterval(() => {
    nextSlide();
}, slideInterval);