document.addEventListener('DOMContentLoaded', () => {
  let header = document.querySelector("h1");

  header.innerHTML = "stuff";
  var OL = document.createElement("OL");

  let traversals = [
    "make sad classes into happy ones",
    "make annoying popup link point instaed to 'http://www.cashcats.biz'",
    "change positioning of annoying popup",
    "6",
    "7"
  ];

  traversals.forEach((traversal) => {
    let traversalLI = document.createElement("LI");
    traversalLI.textContent = traversal;
    OL.appendChild(traversalLI);
  });

  let upcomingTraversals = document.querySelector("h4");
  upcomingTraversals.appendChild(OL);

  let sadClasses = document.getElementsByClassName("sad");

  // for( let i  = 0; i < sadClasses.length; i++) {
  //   sadClasses[i].classList.add('happy');
  //   sadClasses[i].classList.remove('sad');
  // }

  while (sadClasses.length > 0) {
    sadClasses[0].classList.add('happy');
    sadClasses[0].classList.remove('sad');
  }

  let annoyingPopup = document.querySelectorAll('#annoying-popup a');

  // let annoyingAtag = annoyingPopup.querySelector("a");

  annoyingPopup[0].href = "http:////www.cashcats.biz";



});