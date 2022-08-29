var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          nav.classList.add('bg-black', 'bg-opacity-10');
        } else {
          nav.classList.remove('bg-black', 'bg-opacity-10');
        }
      });