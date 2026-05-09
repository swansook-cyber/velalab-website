const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
const navItems = document.querySelectorAll(".nav-links a, .nav-cta");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "ปิดเมนู" : "เปิดเมนู");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "เปิดเมนู");
  });
});
