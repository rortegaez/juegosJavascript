const elemOrigen=document.getElementById('i1');

let seleccionado;

function comienzo(){
  elemOrigen.addEventListener('dragstart',captura,false);
}

function captura(){
  console.log(id);
}
function entrando(){
  console.log('entrando');
}

//window.addEventListener('load', comienzo, false);

/*const elementoSeleccionables=document.querySelectorAll('.imagenes .lista');

//donde guardamos la id
let seleccionado;

//lugar donde se va a comparar
let comparacionId;

//aciertos
let acierto=0;

comienzo();

function captura(){
  selecionado=this.id;
}
function entrando(){
  this.classList.add('over');
}
function saliendo(){
  this.classList.remove('over');
}
function sobre(ev){
  ev.preventDefault();
}
function seleccion(){
  comparacionId=this.id;
}

function comienzo(){
  elementoSeleccionables.forEach(item=>{
    item.addEventListener('dragstart', captura);
    item.addEventListener('dragenter', entrando);
    item.addEventListener('drop', seleccion);
    item.addEventListener('dragover', sobre);
    item.addEventListener('dragleave', saliendo);
  })
}*/