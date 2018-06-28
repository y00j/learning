

document.addEventListener('DOMContentLoaded', () => {

  let lastDragId = document.querySelectorAll(".draggable").length - 1;
  
  const drag = function (e) {
    e.dataTransfer.setData("text", e.target.id);
    e.stopPropagation();
    

  };

  const drop = function(e) {
    e.preventDefault();
    let data, fromNode, idNum;
    data = e.dataTransfer.getData("text");
    fromNode = document.querySelector(`#${data}`);    
    idNum = parseInt(fromNode.id[1]);

    let endNode;

    if ( e.target.classList.contains("child")) {
      return;
    }

    if ( idNum <= 1 ) { 
       endNode = fromNode.cloneNode(true);
       lastDragId++;
       endNode.id = `g${lastDragId}`;
    } else {
      endNode = fromNode;
    }
    

    endNode.ondragstart = drag;
    endNode.ondragover = allowDrop;
    endNode.ondrop = drop;
    e.target.appendChild(endNode);
    e.stopPropagation();
  };



  const allowDrop = function(e) {
    e.preventDefault();
  };

  

  let draggables = document.querySelectorAll(".draggable");
  let canvas = document.querySelector(".canvas");

  draggables.forEach((element) => {element.addEventListener("dragstart", drag);});
  
  canvas.ondragover = allowDrop;
  canvas.ondrop = drop;
  
});