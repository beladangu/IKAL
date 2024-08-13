document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('background-music');
  const playMusicBtn = document.getElementById('play-music-btn');

  // Reproducción y ocultación del botón de música
  playMusicBtn.addEventListener('click', () => {
    music.play();
    playMusicBtn.style.display = 'none'; // Oculta el botón después de hacer clic
  });

  // Carrusel de imágenes y texto dinámico
  const carouselItems = document.querySelectorAll('.carousel-item');
  const dynamicText = document.getElementById('dynamic-text');
  const dynamicSubtext = document.getElementById('dynamic-subtext');

  const combinations = [
    { word: 'BIENVENIDO', subtext: 'Estas en el lugar donde cada tratamiento es una conexión con la naturaleza y la sanación.', image: 'imagenes/BIENVENIDO.png' },
    { word: 'ARMONÍA', subtext: '"Ofrecemos servicios integrales para la sanación del cuerpo, el espíritu y el alma por medio de terapia holística y la medicina tradicional."', image: 'imagenes/ARMONÍA.jpg' },
    { word: 'SALUD', subtext: '"Una experiencia que te permite conectar contigo mism@, la naturaleza y fluir en un abrazo con tus emociones."', image: 'imagenes/SALUD.jpg' },
    { word: 'SERVICIOS', subtext: '"Auriculoterapia, acupuntura, moxibustión, ventosas, tratamientos herbolarios, flores de bach y más."', image: 'imagenes/SERVICIOS.jpg' }
  ];

  let currentIndex = 0;

  function updateTextAndImage() {
    carouselItems.forEach((item) => {
      item.classList.remove('active'); // Eliminar clase activa de todas las imágenes
    });

    dynamicText.textContent = combinations[currentIndex].word;
    dynamicSubtext.textContent = combinations[currentIndex].subtext;
    carouselItems[currentIndex].style.backgroundImage = `url(${combinations[currentIndex].image})`;

    carouselItems[currentIndex].classList.add('active'); // Agregar clase activa a la imagen actual

    currentIndex = (currentIndex + 1) % combinations.length;
  }

  setInterval(updateTextAndImage, 7000); // Cambia cada 7 segundos

  // Ajustar la visibilidad del contenido en móvil
  const updateMenuOnResize = () => {
    const navbarNav = document.querySelector('.navbar-nav');
    if (window.innerWidth <= 768) {
      navbarNav.style.display = 'block';
    } else {
      navbarNav.style.display = 'flex';
    }
  };

  window.addEventListener('resize', updateMenuOnResize);
  updateMenuOnResize(); // Llamar al iniciar

  // Inicializar el carrusel
  carouselItems[currentIndex].classList.add('active');
});

    { word: 'BIENVENIDO', subtext: 'Estas en el lugar donde cada tratamiento es una conexión con la naturaleza y la sanación.', image: 'imagenes/BIENVENIDO.png' },
    { word: 'ARMONÍA', subtext: '"Ofrecemos servicios integrales para la sanación del cuerpo, el espíritu y el alma por medio de terapia holística y la medicina tradicional."', image: 'imagenes/ARMONÍA.jpg' },
    { word: 'SALUD', subtext: '"Una experiencia que te permite conectar contigo mism@, la naturaleza y fluir en un abrazo con tus emociones."', image: 'imagenes/SALUD.jpg' },
    { word: 'SERVICIOS', subtext: '"Auriculoterapia, acupuntura, moxibustión, ventosas, tratamientos herbolarios, flores de bach y más."', image: 'imagenes/SERVICIOS.jpg' }
  ];

  function updateTextAndImage() {
    carouselItems.forEach((item, index) => {
      item.classList.remove('active'); // Eliminar clase activa de todas las imágenes
    });

    currentIndex = (currentIndex + 1) % combinations.length;
    dynamicText.textContent = combinations[currentIndex].word;
    dynamicSubtext.textContent = combinations[currentIndex].subtext;
    carouselItems[currentIndex].style.backgroundImage = `url(${combinations[currentIndex].image})`;

    carouselItems[currentIndex].classList.add('active'); // Agregar clase activa a la imagen actual
  }

  setInterval(updateTextAndImage, 7000); // Cambiar intervalo a 7000ms (7 segundos)

  // Ajustar la visibilidad del contenido en móvil
  const updateMenuOnResize = () => {
    const navbarNav = document.querySelector('.navbar-nav');
    if (window.innerWidth <= 768) {
      navbarNav.style.display = 'block';
    } else {
      navbarNav.style.display = 'flex';
    }
  };

  window.addEventListener('resize', updateMenuOnResize);
  updateMenuOnResize(); // Llamar al iniciar

  // Inicializar el carrusel
  carouselItems[currentIndex].classList.add('active');
});

