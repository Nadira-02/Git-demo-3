const dogs = [];

for(let i = 0; i < 6; i++) {
    const name = prompt("Enter a dog name: ");
    dogs.push(name);
}

dogs.sort();
dogs.reverse();

let htmlList = "";
for (let i = 0; i < dogs.length; i++) {
    htmlList += `<li>${dogs[i]}</li>`;
}

document.querySelector('#target').innerHTML = htmlList;
