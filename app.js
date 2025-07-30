let amigos = [];


function agregarAmigos() {
    let agregar = document.getElementById('amigo').value;
    //Obtenemos el amigo y lo agregamos a la variable agregar
    agregar ==='' ? alert('Por favor, ingrese un nombre') : amigos.push(agregar); limpiarCaja(); mostrarAmigos();
    asignarTextoElemento('resultado','');
    return;
}
function limpiarCaja() {
    //Limpiamos la caja de texto
    document.getElementById('amigo').value = '';
    return;
}


function asignarTextoElemento(id, texto){
    //Asignar un atributo el elemento
    let elementoHTML = document.getElementById(id);
    //Le asignamos un nombre
    elementoHTML.innerHTML = texto;
    return;
}


function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos');
    asignarTextoElemento('listaAmigos', '');
    
    for (let i = 0; i < amigos.length; i++) {
        //Crea un elemento tipo HTML <li>
        let li = document.createElement("li"); 
        //Se asigna el texto del amigo en la posición i del arreglo amigos al contenido del elemento <li>
        li.textContent = amigos[i];      
        //Agrega el elemento <li> con el nombre del amigo al final de la lista        
        lista.appendChild(li);                   
    }    
    return;
}

function sortearAmigo() {
    let indiceSorteado=  Math.floor(Math.random()*amigos.length);
    //Verificar si ya sorteamos todos los numeros
    if (amigos.length === 0) {
        asignarTextoElemento('resultado','La lista de amigos esta vacia');
    }else if (amigos.length === 1) {
        asignarTextoElemento('resultado','Se necesitan minimo 2 amigos para sortear');
    }else {
        let amigoSorteado = amigos[indiceSorteado];
        //Borramos el texto de la listaAmigos
        asignarTextoElemento('listaAmigos', '');
        //Borramos el indice y el amigo ya sorteados de amigos
        amigos.splice(indiceSorteado, 1);
        //Mostramos el resultado del amigo secreto
        asignarTextoElemento('resultado',`El amigo secreto sorteado fue ${amigoSorteado}`);
        //Deshabilitamos el cajon de texto
        document.getElementById('amigo').setAttribute('disabled','true');
        //Deshabilitamos el boton añadir
        document.getElementById('añadir').setAttribute('disabled','true');
        

    }
}
