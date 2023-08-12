const square = document.getElementById("square");
const container = document.getElementById("container");


for(let i = 0; i < 16; i++){
    let newOne = document.createElement("tr");
    newOne.id = "row" + i;
    newOne.classList.add("box")
    square.appendChild(newOne)

    let roww = document.getElementById("row" + i)
    for(let x = 0; x < 16; x++){
        let myCell = document.createElement("td");
        myCell.classList.add("box")
        roww.appendChild(myCell);
    }
    
}

/*for(let i = 0; i < 7; i++){
    for(x = 0; x < 7; x++){
        console.log('#')
    }
}*/

