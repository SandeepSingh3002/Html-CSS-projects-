const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    mousewheel: true,
    grabCursor: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".toggle");
    const navlist = document.querySelector(".navlist");
  
    toggle.addEventListener("click", function () {
      navlist.classList.toggle("show");
    });
  
    const scrollToBtn = document.querySelector(".scroll-to");
    if (scrollToBtn) { 
      scrollToBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0,left:0, behavior: "smooth" });
        console.log("click")
      });
    }
  });

  
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    let counterStarted = Array(counters.length).fill(false);
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function startCounter(counterElement, maxCount) {
      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        counterElement.textContent = count + "k+";
        if (count >= maxCount) {
          clearInterval(interval);
        }
      }, 20); // Adjust the interval speed as needed
    }
  
    function checkScroll() {
      counters.forEach((counter, index) => {
        if (isElementInViewport(counter) && !counterStarted[index]) {
          counterStarted[index] = true;
          const maxCount = parseInt(counter.getAttribute("data-max"), 10);
          startCounter(counter, maxCount);
        }
      });
    }
  
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check in case the elements are already in view
  });
  

