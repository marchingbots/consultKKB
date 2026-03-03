document.addEventListener("DOMContentLoaded", function() {

  /* Intro Fade */
  const intro = document.getElementById("intro-screen");

  if (intro) {
    setTimeout(() => {
      intro.style.opacity = "0";
      setTimeout(() => intro.remove(), 1500);
    }, 1500);
  }

  /* Hero Card Clicks */
  document.querySelectorAll(".hero-card").forEach(card => {
    card.addEventListener("click", function() {
      window.location.href = this.dataset.href;
    });
  });

});