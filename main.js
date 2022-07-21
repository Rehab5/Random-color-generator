const containerEl = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
    const colorContainerEl = document.createElement("div");

    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);

}
const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors() {
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor();
        console.log(newColorCode);

        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;
    });
};

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;

    let colorCode = "";
    for (let i = 0; i < colorCodeLength; i++) {
        const randomNo = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNo, randomNo + 1);

    };
    return colorCode;
};