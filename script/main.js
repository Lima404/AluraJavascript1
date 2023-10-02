function sons (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const teclado = document.querySelectorAll('.tecla');

for (let i = 0; i < teclado.length; i++) {

    const tecla = teclado[i];
    const instrumento = tecla.classList[1];
    //template de string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        sons (idAudio)
    }

}