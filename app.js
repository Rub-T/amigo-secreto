// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigos (){
    let nombres= document.getElementById('amigo').value;
    if ( nombres != '') {
        amigos.push(nombres);
        console.log(amigos);
    } else {
        alert ("Ingresa un nombre correcto");
    }
    document.querySelector('#amigo').value='';
}

function  listaDeAmigos() {
    document.getElementById('listaAmigos').value;
}