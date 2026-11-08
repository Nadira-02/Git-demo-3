const numbers = [];
        
let num = parseInt(prompt("Enter a number (0 to stop):"));
while (num !== 0) {
    numbers.push(num);
    num = parseInt(prompt("Enter a number (0 to stop):"));
}

numbers.sort(function(a, b) {
    return b - a;
});

console.log("Numbers from largest to smallest:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}