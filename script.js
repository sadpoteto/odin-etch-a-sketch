const container = document.querySelector("#container");

const size = 16
let divs = [[], []]

let currentColor = "black";

for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
        divs[i,j] = document.createElement("div");
        divs[i,j].style.width = `${100/size}%`;
        divs[i,j].style.height = `${100/size}%`;

        divs[i,j].addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = currentColor;
            console.log("hey")
        })
        container.appendChild(divs[i,j]);
    }
}