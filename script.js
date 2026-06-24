function setScale() {
  const scaleX = window.innerWidth / 1920;
  const scaleY = window.innerHeight / 1080;

  const scale = Math.min(scaleX, scaleY);

  document.documentElement.style.setProperty("--scale", scale);
}

window.addEventListener("resize", setScale);
setScale();


document.addEventListener("DOMContentLoaded", () => {

  const scene = document.querySelector(".scene");

  // BOTONES
  document.getElementById("btn1").onclick = () => {
    window.location.href = "tableros/tablero1.html";
  };

  document.getElementById("btn2").onclick = () => {
    window.location.href = "tableros/tablero4.html";
  };

  document.getElementById("btn3").onclick = () => {
    window.location.href = "tableros/tablero3.html";
  };

  // MODELO
  const modelo = document.getElementById("modelo");

  modelo.removeAttribute("auto-rotate");

  modelo.addEventListener("mouseenter", () => {
    modelo.setAttribute("auto-rotate", "");
  });

  modelo.addEventListener("mouseleave", () => {
    modelo.removeAttribute("auto-rotate");
  });

  // 🔥 CLICK → transición a introducción
  modelo.addEventListener("click", () => {
    scene.classList.add("zooming");

    setTimeout(() => {
      window.location.href = "tableros/introduccion.html";
    }, 600);
  });

});
