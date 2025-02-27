// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function agregarAmigos () {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    //console.log(amigo); me permitio comprobar que el array funcionaba.
    
    if (!nombreAmigo){  //Validación de campo vacío, el ! es para negar la condición.
        alert("Recuerda ingresar un nombre");
        return;
    }
    amigo.push(nombreAmigo);
    //console.log(amigo);
    inputAmigo.value = "";
    inputAmigo.focus(); //Para que el cursor se mantenga en el input.
    actualizarAmigos();
}
 function actualizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; //para limpiar la lista de amigos.

    for (let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);//para agregar el item a la lista.
    }
    
 }
 function sorteoAmigo(){
    if (amigo.length ===0){ //= atribución, ==comparación valores, ===comparación valores y tipo de dato. 
        alert("No hay amigos para sortear");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
    
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = ""; 
 }
