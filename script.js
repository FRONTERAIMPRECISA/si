function setScale() {
  const scaleX = window.innerWidth / 1920;
  const scaleY = window.innerHeight / 1080;

  // usamos el menor pero con límite mínimo
  let scale = Math.min(scaleX, scaleY);

  // 🔥 CLAVE: evitar que se haga demasiado chico
  scale = Math.max(scale, 0.4);

  document.documentElement.style.setProperty("--scale", scale);
}

window.addEventListener("resize", setScale);
setScale();
