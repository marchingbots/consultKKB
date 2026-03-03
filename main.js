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




  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".contact-btn");

    if (btn) {
      btn.addEventListener("click", function () {
        const user = this.dataset.user;
        const domain = this.dataset.domain;
        const tld = this.dataset.tld;

        const email = user + "@" + domain + "." + tld;

        const link = document.createElement("a");
        link.href = "mailto:" + email;
        link.click();
      });
    }
  });
