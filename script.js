const container = document.querySelector("#container");

const size = 16
let divs = [[], []]

for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
        divs[i,j] = document.createElement("div");
        container.appendChild(divs[i,j]);
    }
}