let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    let listaAmigos = document.getElementById('listaAmigos');
    if (nombreAmigo == '') {
        alert('Por favor, ingrese un nombre valido');
    } else {
        amigos.push(nombreAmigo);
        agregarALista();
        document.getElementById('amigo').value = '';
    }
}

function agregarALista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let cantidadAmigos = amigos.length;
    let amigoSorteado = document.getElementById('resultado');

    if (cantidadAmigos > 0) {
        let numeroSorteado = Math.floor(Math.random() * cantidadAmigos);
        console.log(numeroSorteado);
        amigoSorteado.innerHTML = amigos[numeroSorteado];
    }
}