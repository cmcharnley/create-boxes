/*
let wrapper = document.getElementById("wrapper");
let box = document.createElement("box");
box.id = "box";

let text = document.createTextNode("JS");
box.appendChild(text);

wrapper.appendChild(box);

*/

let userInput; 

function addBoxes() {
    let container = document.getElementById("container");

    let newBox = document.createElement("div");
    newBox.id="box";
    
    container.appendChild(newBox);
}

for (let newBox = 0; newBox === userInput; newBox++) {
    addBoxes();
}
