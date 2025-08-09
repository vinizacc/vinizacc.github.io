let tamanhoFonte = 28;
const textoExibido = document.getElementById('textoExibido');
const inputTexto = document.getElementById('inputTexto');

// Recupera texto salvo
inputTexto.value = localStorage.getItem('mensagem') || '';
textoExibido.textContent = inputTexto.value;

// Atualiza texto ao digitar
inputTexto.addEventListener('input', () => {
    textoExibido.textContent = inputTexto.value;
    localStorage.setItem('mensagem', inputTexto.value);
});

// Aumentar
document.getElementById('aumentar').addEventListener('click', () => {
    tamanhoFonte += 4;
    textoExibido.style.fontSize = tamanhoFonte + 'px';
});

// Diminuir
document.getElementById('diminuir').addEventListener('click', () => {
    if (tamanhoFonte > 12) {
        tamanhoFonte -= 4;
        textoExibido.style.fontSize = tamanhoFonte + 'px';
    }
});

// Tela cheia
document.getElementById('telaCheia').addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

// Inverter cores
document.getElementById('inverter').addEventListener('click', () => {
    textoExibido.classList.toggle('dark-mode');
});
