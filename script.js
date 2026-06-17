function setScale() {
  const scale = Math.min(
    window.innerWidth / 1920,
    window.innerHeight / 1080
  );

  document.documentElement.style.setProperty("--scale", scale);
}

window.addEventListener("resize", setScale);
setScale();


document.addEventListener("DOMContentLoaded", () => {

  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");

  if (btn1) btn1.onclick = () => window.location.href = "tableros/tablero1.html";
  if (btn2) btn2.onclick = () => window.location.href = "tableros/tablero2.html";
  if (btn3) btn3.onclick = () => window.location.href = "tableros/tablero3.html";

  const modelo = document.getElementById("modelo");
  if (!modelo) return;

  modelo.removeAttribute("auto-rotate");

  let rotando = false;

  modelo.addEventListener("mouseenter", () => {
    modelo.setAttribute("auto-rotate", "");
  });

  modelo.addEventListener("mouseleave", () => {
    modelo.removeAttribute("auto-rotate");
  });

  modelo.addEventListener("click", () => {
    rotando = !rotando;

    if (rotando) {
      modelo.setAttribute("auto-rotate", "");
    } else {
      modelo.removeAttribute("auto-rotate");
    }

    window.location.href = "tableros/introduccion.html";
  });

});
