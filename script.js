const container = document.querySelector("#container");

const size = 16
let divs = [[], []]

for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
        divs[i,j] = document.createElement("div");
        divs[i,j].style.width = `${100/size}%`;
        divs[i,j].style.height = `${100/size}%`;
        container.appendChild(divs[i,j]);
    }
}