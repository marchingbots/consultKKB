document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro-screen");

  if (intro) {
    window.setTimeout(() => {
      intro.classList.add("is-hidden");
    }, 850);

    window.setTimeout(() => {
      intro.remove();
    }, 1750);
  }

  document.querySelectorAll(".hero-card[data-href]").forEach((card) => {
    card.addEventListener("click", () => {
      window.location.href = card.dataset.href;
    });
  });

  document.querySelectorAll("[data-user][data-domain][data-tld]").forEach((contactTrigger) => {
    contactTrigger.addEventListener("click", (event) => {
      event.preventDefault();

      const { user, domain, tld } = contactTrigger.dataset;
      window.location.href = `mailto:${user}@${domain}.${tld}`;
    });
  });
});
