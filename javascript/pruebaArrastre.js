let elem_origen=document.getElementById('imagen');

const elem_destino=document.getElementById('zonadestino');

function comenzar(){
    elem_origen.addEventListener('dragstart', comenzamosArrastrar,false);

    //el preventDefault, le dicemos al navegador, que cuando se produzca el dragenter, no haga ninguna función, que pudiese tener el sistema por predeterminada.
    elem_destino.addEventListener('dragenter', function(e){
      e.preventDefault();}, false);

    elem_destino.addEventListener('dragover', function(e){
      e.preventDefault();}, false);

    elem_destino.addEventListener('drop', soltado, false);
  }
  //el parámetro e, es capturar el evento que desata la función
  function comenzamosArrastrar(e){
    let codigo="<img src='" + elem_origen.getAttribute("src") + "'>";
    e.dataTransfer.setData("Text",codigo);
  }
  //innerHTML vas a poner el codigo html que le indiquemos
  function soltado(e){
    e.preventDefault();
    elem_destino.innerHTML=e.dataTransfet.getData("Text");
  }

  window.addEventListener('load',comenzar,false);
