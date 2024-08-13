document.addEventListener('DOMContentLoaded', () => {
  // Selección de elementos
  const dynamicText = document.getElementById('dynamic-text');
  const dynamicSubtext = document.getElementById('dynamic-subtext');
  const items = document.querySelectorAll('.carousel-item');

  // Datos del carrusel
  const combinations = [
    { word: 'BIENVENIDO', subtext: 'Estas en el lugar donde cada tratamiento es una conexión con la naturaleza y la sanación.', image: 'imagenes/BIENVENIDO.png' },
    { word: 'ARMONÍA', subtext: 'Ofrecemos servicios integrales para la sanación del cuerpo, el espíritu y el alma por medio de terapia holística y la medicina tradicional.', image: 'imagenes/ARMONÍA.jpg' },
    { word: 'SALUD', subtext: 'Una experiencia que te permite conectar contigo mism@, la naturaleza y fluir en un abrazo con tus emociones.', image: 'imagenes/SALUD.jpg' },
    { word: 'SERVICIOS', subtext: 'Auriculoterapia, acupuntura, moxibustión, ventosas, tratamientos herbolarios, flores de bach y más.', image: 'imagenes/SERVICIOS.jpg' }
  ];

  let currentIndex = 0;

  // Función para actualizar el texto y la imagen del carrusel
  function updateTextAndImage() {
    items.forEach((item, index) => {
      item.classList.remove('active'); // Eliminar la clase activa de todas las imágenes
    });

    currentIndex = (currentIndex + 1) % combinations.length;
    dynamicText.textContent = combinations[currentIndex].word;
    dynamicSubtext.textContent = combinations[currentIndex].subtext;
    items[currentIndex].style.backgroundImage = `url(${combinations[currentIndex].image})`;

    items[currentIndex].classList.add('active'); // Agregar la clase activa a la imagen actual
  }

  // Cambiar imagen y texto cada 7 segundos
  setInterval(updateTextAndImage, 7000);

  // Reproducción de música
  const music = document.getElementById('background-music');
  const playMusicBtn = document.getElementById('play-music-btn');

  playMusicBtn.addEventListener('click', () => {
    music.play();
    playMusicBtn.style.display = 'none'; // Ocultar el botón después de reproducir la música
  });

  // Inicializar el carrusel
  items[currentIndex].classList.add('active');
});
