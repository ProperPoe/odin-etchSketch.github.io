const square = document.getElementById("square");
const container = document.getElementById("container");
const reset = document.getElementById("reset");


for(let i = 0; i < 64; i++){
    for(let j = 0; j < 64; j++){
        let newOne = document.createElement("div");
        newOne.classList.add("box");

        newOne.addEventListener("mouseover", function() {
            this.classList.add("active")
        })
        
        reset.addEventListener("click", function() {
            newOne.classList.remove("active")
        })

        container.appendChild(newOne)

        
    }
    
    
}

/*for(let i = 0; i < 7; i++){
    for(x = 0; x < 7; x++){
        console.log('#')
    }
}*/

