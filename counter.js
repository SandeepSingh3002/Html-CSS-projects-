
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
  

