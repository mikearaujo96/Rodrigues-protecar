const video = document.getElementById("meuVideo2");
const container = document.getElementById("bgVideo2");

// força atributos importantes
video.muted = true;
video.setAttribute("muted", "");
video.setAttribute("playsinline", "");
video.setAttribute("webkit-playsinline", "");

// tenta dar play
video.play().catch(() => {
  console.warn("Autoplay bloqueado, trocando por imagem estática.");
  // remove o vídeo
  video.remove();
  // cria a imagem
  const img = document.createElement("img");
  img.src = "assets/imagens/backgroun-precos.png"; // coloque a imagem estática aqui
  img.className = "video"; // pra herdar o mesmo CSS
  container.appendChild(img);
});

