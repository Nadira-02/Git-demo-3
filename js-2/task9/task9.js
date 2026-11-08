function even(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

const originalArray = [2, 7, 4, 9, 12, 15];

const filteredArray = even(originalArray);

console.log("Original array:", originalArray);
console.log("Even numbers array:", filteredArray);
