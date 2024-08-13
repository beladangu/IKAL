document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('background-music');
  const playMusicBtn = document.getElementById('play-music-btn');

  // Reproducción y ocultación del botón de música
  playMusicBtn.addEventListener('click', () => {
    music.play();
    playMusicBtn.style.display = 'none'; // Oculta el botón después de hacer clic
  });

  // Carrusel de imágenes
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function showNextItem() {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add('active');
  }

  setInterval(showNextItem, 7000); // Cambia cada 7 segundos

  // Ajustar la visibilidad del contenido en móvil
  const updateMenuOnResize = () => {
    if (window.innerWidth <= 768) {
      document.querySelector('.navbar-nav').style.display = 'block';
    } else {
      document.querySelector('.navbar-nav').style.display = 'flex';
    }
  };

  window.addEventListener('resize', updateMenuOnResize);
  updateMenuOnResize(); // Llamar al iniciar
});
