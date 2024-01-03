const container = document.querySelector("#container");
const gsBtn = document.querySelector("#gridsize");

gsBtn.addEventListener("click", setGridsize);

let size = 16
let divs = [[], []]

let currentColor = "black";

function setGridsize() {
    while(1) {
        let input = prompt("Enter grid size (1~100): ", size);
        if(input == null) break;
        input = parseInt(input);
        if(isNaN(input)) continue;
        size = (input <= 100) ? input : 100;
        container.textContent = "";
        //replaces all children with a #text node, faster than emptying 
        //innerHTML through the browser's parser
        
        for(let i = 0; i < size; i++) {
            for(let j = 0; j < size; j++) {
                divs[i,j] = document.createElement("div");
                divs[i,j].style.width = `${100/size}%`;
                divs[i,j].style.height = `${100/size}%`;

                divs[i,j].addEventListener("mouseover", (e) => {
                    e.target.style.backgroundColor = currentColor ?? `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
                    //null currentColor is how the "random" color selection is indicated
                })
                container.appendChild(divs[i,j]);
            }
        }
        break;
    }
}