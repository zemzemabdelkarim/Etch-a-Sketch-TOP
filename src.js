let container = document.querySelector("#container");

for(let i = 0 ; i < 16*16; i++){
    container.appendChild(document.createElement("div"));
    container.lastChild.classList.add("item");
}