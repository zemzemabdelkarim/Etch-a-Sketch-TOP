function randomeNumber() {
    return parseInt(Math.random() * 255);
}

function clearContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

let size = 16;

function createSketch() {
    let container = document.querySelector("#container");
    clearContainer(container);

    for (let i = 0; i < size * size; i++) {
        container.appendChild(document.createElement("div"));
        container.lastChild.classList.add("item");
        container.lastChild.setAttribute(
            "style",
            `background-color:rgb(215, 215, 215);width: calc(100% * (1/${size})  );aspect-ratio: 1 / 1;`
        );
        container.lastChild.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `rgb(${randomeNumber()},${randomeNumber()},${randomeNumber()})`;
        });
    }
}

createSketch();

let resize = document.querySelector("#resize");
resize.addEventListener("click", () => {
    newSize = prompt("Enter the new size you want : ");
    size = parseInt(newSize);
    while (size < 1 || size > 100 || size === NaN) {
        newSize = prompt("Invalid size, it has to be between 1 and 100 : ");
        size = parseInt(newSize);
    }

    createSketch();
});
