/* =========================================
   PORTFOLIO SCROLL REVEAL
========================================= */

const portfolioReveal = document.querySelectorAll(".portfolio-section .reveal");

const portfolioObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.12
  }
);

portfolioReveal.forEach((item) => {
  portfolioObserver.observe(item);
});
