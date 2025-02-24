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
    amigos.push(nombreAmigo)
    
    listaDeAmigos();
    // Limpiar el campo de entrada después de agregar el nombre
    inputAmigo.value = "";
}

function listaDeAmigos() {

    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = ""; // Limpia la lista

    for (let i = 0; i < amigos.length; i++) {

        let amigo = amigos[i];
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigo; // Asignar el nombre del amigo

        // Agregar el nuevo <li> a la lista <ul>
        lista.appendChild(nuevoAmigo);
    }
}