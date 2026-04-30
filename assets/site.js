(function () {
  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const btn = document.querySelector(".nav-toggle");
  const links = document.getElementById("navlinks");

  if (btn && links) {
    btn.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  }
})();