// Esperar a que cargue todo el documento
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const cards = Array.from(track.children);
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    // Tamaño de una tarjeta más el margen para calcular el movimiento
    const cardWidth = cards[0].getBoundingClientRect().width + 40; 
    let currentIndex = 0;

    // Función para mover el carrusel
    function moveToCard(index) {
        track.style.transform = 'translateX(' + (-cardWidth * index) + 'px)';
    }

    // Botón Siguiente
    nextBtn.addEventListener('click', e => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Vuelve al principio si llega al final
        }
        moveToCard(currentIndex);
    });

    // Botón Anterior
    prevBtn.addEventListener('click', e => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cards.length - 1; // Vuelve al final si llega al principio
        }
        moveToCard(currentIndex);
    });
});