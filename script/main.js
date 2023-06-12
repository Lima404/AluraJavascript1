function sons (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const teclado = document.querySelectorAll('.tecla');
let i = 0;

while (i < teclado.length){
    teclado[i].onclick = function (){
        sons ('#som_tecla_pom')
    }
    i ++;
    console.log(i);
}