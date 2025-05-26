document.documentElement.classList.add('js');           // als JS aan staat voegt die class toe aan HTML

document.addEventListener('DOMContentLoaded', () => {   // als de hele pagina klaar is met laden, dan…
  const nav = document.querySelector('.navigation');  
  const header = document.querySelector('.header');

  let navVisible = false;                               // maakt aan nav = nog niet zichtbaar
  let lastScrollTime = 0;
  const throttleDelay = 100;                            // na het de scroll, wacht heel even, anders te druk

  function showNav() {                                  // maak functie aan die nav later gaat showen
    if (!navVisible) {                                  // als nav nu nog niet zichtbaar is dan...
      nav.classList.add('visible');                     // voeg aan nav class visible toe (wordt zihtbaar)
      header.classList.add('nav-visible');              // voeg aan header class nav-visible toe (verplaatst omhoog)
      navVisible = true;                                // geeft aan navigatie is nu zichtbaar
    }
  }

  function hideNav() {                                  // precies hetzelfde maar dan omgekeerd
    if (navVisible) {
      nav.classList.remove('visible');
      header.classList.remove('nav-visible');
      navVisible = false;
    }
  }

  function onScrollEvent(e) {                           // maakt functie aan en luistert als iemand scrolt of met het muiswiel draait.
    const now = Date.now();                             // vraagt de tijd aan
    if (now - lastScrollTime < throttleDelay) return;   // < 100 milliseconden geleden reactie, dan doen we nu niks.
    lastScrollTime = now;                               // anders onthouden dat er nu is gereageerd

    if (e.deltaY > 0) {                                 // als iemand omlaag scrollt
      showNav();                                        // laat dan de nav zien
    } else if (e.deltaY < 0) {                          // als iemand omhoog scrollt
      hideNav();                                        // verberg dan de nav
    }
  }

  window.addEventListener('wheel', onScrollEvent);      // verteld dat er geluisterd moet worden naar wheel (muis, scroll)

// TOUCHSCREENS  
  let touchStartY = null;                               // plek om te onthouden waar je een vinger neerzet op het scherm (voor touch devices)

  window.addEventListener('touchstart', (e) => {        // als iemand scherm met een vinger aanraakt..
    if (e.touches.length === 1) {                       // zeker zijn dat het 1 vinger is
      touchStartY = e.touches[0].clientY;               // onthoud waar op het scherm die vinger is neergezet (hoe ver van boven).
    }
  });

  window.addEventListener('touchmove', (e) => {         // Als die vinger over het scherm beweegt...
    if (!touchStartY) return;                           // als we niet weten waar die begon doen we niks

    const currentY = e.touches[0].clientY;              // kijk waar vinger nu is
    const diffY = touchStartY - currentY;               // bereken hoeveel die vinger omhoog of omlaag is gegaan

    if (Math.abs(diffY) > 10) {                         // als vinger > 10 pixels is bewogen (echte swipe)
      if (diffY > 0) {                                  // bij swipe omhoog 
        showNav();                                      // komt nav tevoorschijn
      } else {                                          // bij swipe omlaag
        hideNav();                                      // verdwijnt de nav
      }
      touchStartY = currentY;                           // reset startpunt om meerdere swipes te detecteren
    }
  });


// PIJLTJES KEYBOARD
  window.addEventListener('keydown', (e) => {
    const scrollDownKeys = ['ArrowDown', 'PageDown', 'Space'];  // scroll naar beneden toetsen
    const scrollUpKeys = ['ArrowUp', 'PageUp'];                 // scroll naar boven toetsen

    if (scrollDownKeys.includes(e.key)) {                       // spreekt voorzich...
      showNav();
    } else if (scrollUpKeys.includes(e.key)) {
      hideNav();
    }
  });
});
