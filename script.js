function openLetter() {
  document.getElementById("intro").style.display = "none";
  const container = document.getElementById("container");
  container.style.display = "flex";

  // Wait for layout to apply before animation
  setTimeout(() => {
    container.classList.add("open");
  }, 50);

  // Start floating animation
  setInterval(() => {
    createElement(Math.random() > 0.5 ? "heart" : "flower");
  }, 400);
}

const floating = document.getElementById("floating");

function createElement(type) {
  const el = document.createElement("div");
  el.classList.add("element", type);
  el.style.left = `${Math.random() * 100}vw`;
  el.style.animationDuration = `${5 + Math.random() * 5}s`;
  el.style.opacity = `${0.5 + Math.random() * 0.5}`;
  el.style.width = el.style.height = `${20 + Math.random() * 20}px`;

  floating.appendChild(el);
  setTimeout(() => el.remove(), 10000);
}
