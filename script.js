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

let lastTouch = 0;

document.addEventListener("touchend", function (event) {
    const now = new Date().getTime();
    if (now - lastTouch <= 300) { // intervalo mínimo de 500ms
        event.preventDefault();
    }
    lastTouch = now;
}, { passive: false });



