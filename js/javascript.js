var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          nav.classList.add('bg-primary', 'shadow', 'background-color: rgba(0,0,0, 0.7)');
        } else {
          nav.classList.remove('bg-primary', 'shadow');
        }
      });