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

