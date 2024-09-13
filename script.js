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
  