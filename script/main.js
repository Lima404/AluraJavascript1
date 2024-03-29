function sons(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else{
        alert('Elemento não encontrado ou seletor inválido!');
        console.log('Elemento não encontrado ou seletor inválido!');
    }

}

const teclado = document.querySelectorAll('.tecla');

for (let i = 0; i < teclado.length; i++) {

    const tecla = teclado[i];
    const instrumento = tecla.classList[1];
    //template de string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        sons(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}