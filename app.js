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
    
    // Limpiar el campo de entrada después de agregar el nombre
    inputAmigo.value = "";
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    let listaAmigos = document.getElementById('listaAmigos').children;
    let resultado = document.getElementById('resultado');

    // Verificar si hay al menos dos amigos en la lista
    if (listaAmigos.length < 2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return; // Detener la función si no hay suficientes amigos
    }

    // Limpiar resultados anteriores
    resultado.innerHTML = "";

    // Crear una copia de la lista de amigos para no modificar la original
    let amigos = Array.from(listaAmigos).map(li => li.textContent);

    // Realizar el sorteo
    let asignaciones = {};
    let amigosDisponibles = [...amigos];

    amigos.forEach(amigo => {
        // Filtrar para que no se asigne a sí mismo
        let posibles = amigosDisponibles.filter(a => a !== amigo);
        let amigoAsignado = posibles[Math.floor(Math.random() * posibles.length)];

        // Asignar el amigo secreto
        asignaciones[amigo] = amigoAsignado;

        // Eliminar el amigo asignado de la lista de disponibles
        amigosDisponibles.splice(amigosDisponibles.indexOf(amigoAsignado), 1);
    });

    // Mostrar los resultados
    for (let [amigo, amigoSecreto] of Object.entries(asignaciones)) {
        let resultadoItem = document.createElement('li');
        resultadoItem.textContent = `${amigo} ➔ ${amigoSecreto}`;
        resultado.appendChild(resultadoItem);
    }
}