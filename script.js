const square = document.getElementById("square");
const container = document.getElementById("container");
const reset = document.getElementById("reset");
const input = document.getElementById("input");
const newBtn = document.getElementById("new")
const maxBoxSize = 700;

const initialWidth = 16;
const initalHeight = 16;



function createGrid (width, height){
    container.innerHTML = "";

    const boxWidth = Math.min(maxBoxSize, 700/width);
    const boxHeight = Math.min(maxBoxSize, 700/height);

    container.style.gridTemplateRows = `repeat(${height}, ${boxHeight}px)`;
    container.style.gridTemplateColumns = `repeat(${width}, ${boxWidth}px)`;
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            let newOne = document.createElement("div");
            newOne.classList.add("box");
    
            newOne.addEventListener("mouseover", function() {
                this.classList.add("active");
            })
            
            reset.addEventListener("click", function() {
                newOne.classList.remove("active");
            })
            container.appendChild(newOne);      
        }
        
        
    }
}

createGrid(initialWidth, initalHeight)

newBtn.addEventListener("click", () => {
    input.innerHTML = `<div>
        <input class="height" id="height" type="text">
        <input class="width" id="width" type="text">
        <button id="createBtn">Create</button>
        </div>`
    
    const createBtn = document.getElementById("createBtn");
    const gridHeight = document.getElementById("height")
    const gridWidth = document.getElementById("width")
    createBtn.addEventListener("click", () => {
        let width = gridWidth.value;
        let height = gridHeight.value;
        
        if(!isNaN(width) && !isNaN(height) && width > 0 && height > 0){
            createGrid(width, height);
        }
        input.innerHTML = "";
    })
})


