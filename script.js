document.addEventListener("DOMContentLoaded", () => {

  // =====================
  // BOTONES
  // =====================
  document.getElementById("btn1").onclick = () => {
    window.location.href = "tableros/tablero1.html";
  };

  document.getElementById("btn2").onclick = () => {
    window.location.href = "tableros/tablero2.html";
  };

  document.getElementById("btn3").onclick = () => {
    window.location.href = "tableros/tablero3.html";
  };

  // =====================
  // MODELO 3D
  // =====================
  const modelo = document.getElementById("modelo");

  // estado inicial sin rotación
  modelo.removeAttribute("auto-rotate");

  let rotando = false;

  // desktop: hover
  modelo.addEventListener("mouseenter", () => {
    modelo.setAttribute("auto-rotate", "");
  });

  modelo.addEventListener("mouseleave", () => {
    modelo.removeAttribute("auto-rotate");
  });

  // mobile + click toggle (mejora importante)
  modelo.addEventListener("click", () => {
    rotando = !rotando;

    if (rotando) {
      modelo.setAttribute("auto-rotate", "");
    } else {
      modelo.removeAttribute("auto-rotate");
    }

    // navegación a introducción (como ya tenías)
    window.location.href = "tableros/introduccion.html";
  });

});
