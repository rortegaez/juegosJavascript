function comenzar(){
    let elem_origen=document.getElementById('imagen');
    elem_origen.addEventListener('dragstart',comenzarArrastrar,false);
  }

  window.addEventListener('load',comenzar,false);
