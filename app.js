// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigos() {
    //Obtenemos el amigo y lo agregamos a la variable agregar
    let agregar = document.getElementById('amigo').value; 
    //Hacemos un if resumino en una linea.
    agregar ==='' ? alert('Por favor, ingrese un nombre') : amigos.push(agregar); limpiarCaja(); mostrarAmigos();
    asignarTextoElemento('resultado','');
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
    
}

function sortearAmigo() {
    let indiceSorteado=  Math.floor(Math.random()*amigos.length);
    //Verificar si ya sorteamos todos los nuemros
    if (amigos.length === 0) {
        asignarTextoElemento('resultado','La lista de amigos esta vacia');
    }else if (amigos.length === 1) {
        asignarTextoElemento('resultado','Se necesitan minimo 2 amigos para sortear');
    } else {
        let amigoSorteado = amigos[indiceSorteado];
        asignarTextoElemento('listaAmigos', '');
        asignarTextoElemento('resultado',`El amigo secreto sorteado fue ${amigoSorteado}`);
        
    } 
    return;   
}

