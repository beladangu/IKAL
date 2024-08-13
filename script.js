document.addEventListener('DOMContentLoaded', () => {
  const dynamicText = document.getElementById('dynamic-text');
  const dynamicSubtext = document.getElementById('dynamic-subtext');
  const items = document.querySelectorAll('.carousel-item');
  const music = document.getElementById('background-music');
  const playMusicBtn = document.getElementById('play-music-btn');
 const combinations = [
    { word: 'BIENVENIDO', subtext: 'Estas en el lugar donde cada tratamiento es una conexión con la naturaleza y la sanación.', image: 'imagenes/BIENVENIDO.png' },
    { word: 'ARMONÍA', subtext: '"Ofrecemos servicios integrales para la sanación del cuerpo, el espíritu y el alma por medio de terapia holística y la medicina tradicional."', image: 'imagenes/ARMONÍA.jpg' },
    { word: 'SALUD', subtext: '"Una experiencia que te permite conectar contigo mism@, la naturaleza y fluir en un abrazo con tus emociones."', image: 'imagenes/SALUD.jpg' },
    { word: 'SERVICIOS', subtext: '"Auriculoterapia, acupuntura, moxibustión, ventosas, tratamientos herbolarios, flores de bach y más."', image: 'imagenes/SERVICIOS.jpg' }
  ];

  let currentIndex = 0;

  function updateTextAndImage() {
    items.forEach((item, index) => {
      item.classList.remove('active'); // Eliminar clase activa de todas las imágenes
    });

    currentIndex = (currentIndex + 1) % combinations.length;
    dynamicText.textContent = combinations[currentIndex].word;
    dynamicSubtext.textContent = combinations[currentIndex].subtext;
    items[currentIndex].style.backgroundImage = `url(${combinations[currentIndex].image})`;

    items[currentIndex].classList.add('active'); // Agregar clase activa a la imagen actual
  }

  setInterval(updateTextAndImage, 7000); // Cambiar intervalo a 7000ms (7 segundos)

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
// Inicializar el carrusel
  items[currentIndex].classList.add('active');
  window.addEventListener('resize', updateMenuOnResize);
  updateMenuOnResize(); // Llamar al iniciar
});
