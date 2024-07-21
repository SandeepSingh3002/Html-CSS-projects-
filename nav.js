document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".toggle");
  const navlist = document.querySelector(".navlist");
  const toggleIcon=document.querySelector(".toggle-icon");


  toggle.addEventListener("click", function () {
    navlist.classList.toggle("show");
    toggleIcon.classList.toggle("active");
  });

  const scrollToBtn = document.querySelector(".scroll-to");
  if (scrollToBtn) { 
    scrollToBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0,left:0, behavior: "smooth" });
      console.log("click")
    });
  }

});