function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let htmlList = "";
let roll;

while (roll !== 6) {
    roll = rollDice();
    htmlList += `<li>Result: ${roll}</li>`;
}
document.querySelector("#target").innerHTML = htmlList;
