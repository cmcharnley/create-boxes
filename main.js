const container = document.getElementById("container");

//container is a global variable//

function clearBoxes() {
    container.innerHTML = "";
}
//providing an  empty string will clear the boxes and set HTML to nothing//

function addBoxes() {
    clearBoxes();

    const userInput = document.getElementById("numberbox").value; //variable gets the value of user input

    for (let i = 0; i < userInput; i++) {
        const newBox = document.createElement("div");
        newBox.className = "box";

        container.appendChild(newBox);
    }
}

//the for loop creates a new div with class name of box and appends the new box, until equals user input//