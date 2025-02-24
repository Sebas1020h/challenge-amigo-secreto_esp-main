// Función para agregar un amigo a la lista
let amigos = []

function agregarAmigo() {
    // Obtener el valor del campo de entrada
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;

    // Validar si el campo está vacío
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detener la función si el campo está vacío
    }
    // Agrega elemento al Array
    amigos.push(nombreAmigo);

    listaDeAmigos();
    // Limpiar el campo de entrada después de agregar el nombre
    inputAmigo.value = "";
}

function listaDeAmigos() {

    let lista = document.getElementById('listaAmigos');
    // Limpia la lista
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {

        let amigo = amigos[i];
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigo; // Asignar el nombre del amigo

        // Agregar el nuevo <li> a la lista <ul>
        lista.appendChild(nuevoAmigo);
    }
}

function sortearAmigo() {

    let lista = document.getElementById('listaAmigos');
    let resultado = document.getElementById('resultado');
    // generador del indice aleatorio segun la cantidad de elementos en "amigos"
    let indice = Math.floor(Math.random() * amigos.length) ;
    let amigoSorteado = amigos[indice];

    //comprobar si el array de amigos no este vacio
    if (amigos.length === 0 ) {
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return;
    }

    // Limpia la lista
    lista.innerHTML = ""; 

    // Mostrar el resultado
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;

}