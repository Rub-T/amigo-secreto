// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoElegido=[];

function agregarAmigos (){
    let nombres = document.getElementById('amigo');
    let amigo = nombres.value;
    if ( amigo != '') {
        amigoElegido.push(amigo);
        console.log(amigoElegido);
    } else {
        alert ("Ingresa un nombre correcto");
        return;
    }
    document.querySelector('#amigo').value='';
    crearLista();
}

function  crearLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML="";

    for (let i=0; i < amigoElegido.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigoElegido[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigoElegido.length < 2) {
        alert ("Ingresa más de un amigo")
        return;
    }
    let sorteo = amigoElegido[Math.floor(Math.random()*amigoElegido.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo elegido es: ${sorteo}`;

    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = "";
}