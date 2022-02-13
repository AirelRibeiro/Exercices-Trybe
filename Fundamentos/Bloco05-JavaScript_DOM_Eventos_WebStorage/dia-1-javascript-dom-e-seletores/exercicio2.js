//Codigo executado para exercicio da parte 3 - usando todo o conteúdo do dia 5.1.

console.log(document.body);

let cont = document.getElementById("header-container");

cont.style.color = "white";

cont.style.backgroundColor = "lightGrenn";

cont.style.backgroundColor = "lightGreen";

let urgent = document.getElementsByClassName("emergency-tasks");

urgent[0].style.backgroundColor = "lightSalmon";

let urgentText = document.querySelectorAll(".emergency-tasks div h3");

for (let index of urgentText) {
    index.style.color = "white";
    index.style.fontSize = "30px";
   index.style.backgroundColor = "purple";
}

let noUrgent = document.getElementsByClassName("no-emergency-tasks");

noUrgent[0].style.backgroundColor = "khaki";

let noUrgentText = document.querySelectorAll(".no-emergency-tasks div h3");

for (index of noUrgentText) {
    index.style.color = "white";
    index.style.fontSize = "25px";
    index.style.background = "black"
}

let rodaPe = document.querySelector("footer div");

rodaPe.style.backgroundColor = "darkSlateGrey";

rodaPe.style.fontSize = "20px";

rodaPe.style.color = "white";

rodaPe.style.padding = "10px";



