// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];

function agregarAmigo(){

  const nombreAmigo = document.querySelector('.input-name');
  

  if (nombreAmigo.value === '') {
    alert('Ingrese un nombre');
    return}
    else {
      amigos.push(nombreAmigo.value);
      console.log(amigos);
      nombreAmigo.value = '';
    } 

  
  mostrarListaAmigos();
}

function mostrarListaAmigos() {
  let ListaAmigosHTML = '';
  for (let i = 0; i < amigos.length; i++) {  
    const html = `
      <li class="amigo-item">
        <span class="amigo-nombre">${amigos[i]}</span>
        <button onclick="borrarAmigo(${i})" class="btn-borrar">Borrar</button>
      </li>`;
    ListaAmigosHTML += html;
  }
  document.querySelector('.name-list').innerHTML = ListaAmigosHTML;
}


function borrarAmigo(index) {
  amigos.splice(index, 1);
  mostrarListaAmigos();
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos para sortear');
    return;
  }
  if (amigos.length === 1) {
    alert('No se puede sortear con un solo amigo en la lista');
    return;
  }
  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];
  amigos.splice(indice, 1);
  document.querySelector('.result-list')
    .innerHTML = `<strong>El/la ganador/a es:</strong> ${amigoSorteado}!!!!`;
  mostrarListaAmigos();
  

} 

function resetearTodo() {
  amigos = []; 
  document.querySelector('.name-list').innerHTML = ''; 
  document.querySelector('.result-list').innerHTML = ''; 
  document.querySelector('.input-name').value = '';
}

document.querySelector('.input-name').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    agregarAmigo();
  }
});