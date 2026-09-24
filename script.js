document.querySelector("#year").textContent = new Date().getFullYear();

// The dots deliberately use normal anchor links: a click goes straight to the
// corresponding résumé entry, and the :target style makes it easy to find.
document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", link.getAttribute("href"));
  });
});
