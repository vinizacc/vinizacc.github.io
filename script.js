let tamanhoFonte = 64;
const caixaTexto = document.getElementById('caixaTexto');

document.getElementById('aumentar').addEventListener('click', () => {
    tamanhoFonte += 4;
    caixaTexto.style.fontSize = tamanhoFonte + 'px';
});

document.getElementById('diminuir').addEventListener('click', () => {
    if (tamanhoFonte > 12) {
        tamanhoFonte -= 4;
        caixaTexto.style.fontSize = tamanhoFonte + 'px';
    }
});

document.addEventListener('touchstart', function(event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
  const now = new Date().getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
}, false);



