const num = parseInt(prompt("Enter an integer: "));
let Prime = true;

if (num <= 1) {
    Prime = false
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0){
            Prime = false;
            break;
        }
    }
}
if (Prime) {
    document.querySelector("#target").innerHTML = num + " is a prime number.";
} else {
    document.querySelector("#target").innerHTML = num + " is not a prime number.";
}
