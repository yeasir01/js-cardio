const nav = document.querySelector(".navbar");

const offset = 100;

window.addEventListener("scroll", () => {
  window.scrollY > offset
    ? nav.classList.add("blue")
    : nav.classList.remove("blue");
});
