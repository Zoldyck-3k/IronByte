document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.trending-slider', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      breakpoints: {
        500: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  });
  
  // Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// // script.js

// document.addEventListener("DOMContentLoaded", function () {
//   var swiper = new Swiper(".trending-slider", {
//       spaceBetween: 50,
//       centeredSlides: true,
//       autoplay: {
//           delay: 25000,
//           disableOnInteraction: false,
//       },
//       pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//       },
//       navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//       },
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Add 'animate' class to the progress element
              const progressElement = entry.target;
              const width = progressElement.dataset.width;
              progressElement.style.width = width;
              observer.unobserve(progressElement); // Stop observing once animated
          }
      });
  }, options);

  // Observe all progress bars
  document.querySelectorAll('.progress').forEach(progress => {
      // Set initial width to 0% and store the target width in data attribute
      progress.style.width = '0';
      progress.dataset.width = progress.parentElement.querySelector('span').dataset.width;
      observer.observe(progress);
  });
});