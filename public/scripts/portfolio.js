const scrollContainer = document.querySelector('.horizontal-scroll');
const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function updateScrollButtons() {
    const scrollLeft = scrollContainer.scrollLeft;
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    if (scrollLeft <= 5) {
      leftBtn.classList.add('hidden');
    } else {
      leftBtn.classList.remove('hidden');
    }
    if (scrollLeft >= maxScrollLeft - 5) {
      rightBtn.classList.add('hidden');
    } else {
      rightBtn.classList.remove('hidden');
    }
  }

  leftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
  });

  window.addEventListener('wheel', (e) => {
    if (!isInViewport(scrollContainer)) return;

    // Alleen bij verticale scroll dominant
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      const scrollSpeed = 10; // hogere waarde = sneller scrollen
      scrollContainer.scrollLeft += e.deltaY * scrollSpeed;
      updateScrollButtons();
    }
  }, { passive: false });

  window.addEventListener('load', updateScrollButtons);
  window.addEventListener('resize', updateScrollButtons);
  scrollContainer.addEventListener('scroll', updateScrollButtons);