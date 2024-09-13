window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.spec');
  
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (position < windowHeight - 100) {
        el.style.opacity = '1';
        el.style.transform = 'translateX(0)';
      } else {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-50px)';
      }
    });
  });

  let slideIndex = 0;
  const slideTrack = document.querySelector('.slide-track');
  const slides = document.querySelectorAll('.slide-item');
  const totalSlides = slides.length;
  
  function showSlides(n) {
      if (n >= totalSlides) { slideIndex = 0; }
      if (n < 0) { slideIndex = totalSlides - 1; }
      
      slideTrack.style.transform = `translateX(${-(slideIndex * 100)}%)`;
  }
  
  function moveSlide(n) {
      slideIndex += n;
      if (slideIndex >= totalSlides) { slideIndex = 0; }
      if (slideIndex < 0) { slideIndex = totalSlides - 1; }
      showSlides(slideIndex);
  }
  
  // Initialize the slider
  showSlides(slideIndex);
  
  // Add event listeners to buttons
  document.querySelector('.slider-prev').addEventListener('click', () => moveSlide(-1));
  document.querySelector('.slider-next').addEventListener('click', () => moveSlide(1));
  
  // Swipe functionality for mobile
  let startX, endX;
  
  slideTrack.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
  });
  
  slideTrack.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) {
          moveSlide(1); // Swipe left
      } else if (endX - startX > 50) {
          moveSlide(-1); // Swipe right
      }
  });
  

  

