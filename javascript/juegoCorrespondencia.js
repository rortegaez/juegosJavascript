const draggableListItems=document.querySelectorAll('dragablle.list li');
const endMessage=document.getElementById('endMessage');

//donde guardaremos la id seleccionada
let selectedId;

//el lugar donde va, para comparar
let dropTarget;

//cuantas frases correctas
let matchingCounter=0;

addEventListeners();

function dragStart(){
    selectedId=this.id;
}

function dragEnter(){
    this.classList.add('over');
}

function dragLeave(){
    this.classList.remove('over');
}

function dragOver(ev){
    ev.preventDefault();
}

function dragDrop(){
    dropTargetId=this.id;

    if(checkForMatch(selected,dropTarget)){
        document.getElementById(selectedId).style.display='none';
        document.getElementById(dropTarget).style.display='none';
        matchingCounter++;
    }else if(checkForMatch2(selected,dropTarget)){
        document.getElementById(selectedId).style.display='none';
        document.getElementById(dropTarget).style.display='none';
        matchingCounter++;
    }

    if(matchingCounter === 5){
        endMessage.style.display = 'block';
    }

    this.classList.remove('over');
}

function checkForMatch(selected,dropTarget){
    switch(selected){
        case 's1':
            return dropTarget === 'e1' ? true : false;
        case 's2':
            return dropTarget === 'e2' ? true : false;
        case 's3':
            return dropTarget === 'e3' ? true : false;
        case 's4':
            return dropTarget === 'e4' ? true : false;
        case 's5':
            return dropTarget === 'e5' ? true : false;
        default:
            return false;
    }
}

function checkForMatch2(selected,dropTarget){
    switch(selected){
        case 'e1':
            return dropTarget === 's1' ? true : false;
        case 'e2':
            return dropTarget === 's2' ? true : false;
        case 'e3':
            return dropTarget === 's3' ? true : false;
        case 'e4':
            return dropTarget === 's4' ? true : false;
        case 'e5':
            return dropTarget === 's5' ? true : false;
        default:
            return false;
    }
}

function addEventListeners(){
    draggableListItems.forEach(item =>{
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragover', dragOver);
        item.addEventListener('dragleave', dragLeave);
    })
}