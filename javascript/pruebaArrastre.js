function comenzar(){
    let elem_origen=document.getElementById('imagen');
    elem_origen.addEventListener('dragstart',function(){alert('Comenzo el evento');},false);
  }

  window.addEventListener('load',comenzar,false);
