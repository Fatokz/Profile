let out = document.getElementById("output")
let img = document.getElementById("image")
let image = ['avatar7.png', 'avatar2.png', 'avatar3.png', 'avatar6.png', 'avatar4.png'];
let index = 0
img.src = image[index]

let arrObj = [
    { name: 'Dyno' },
    { name: 'Tout', age: 5 },
    { name: 'Full name: Celeb', age: 'age: 7 '},
    { name: 'One more', age: 11 }
];
out.innerHTML += `<h3>${arrObj[2].name}</h3> <h3> ${arrObj[2].age}</h3>`;

function next() {
    if (index == image.length - 1) {
        index = 0
    } else {
        index++
    }
    img.src = image[index]
}

function prev() {
    if (index == 0) {
        index = image.length - 1
    } else {
        index--
    }
    img.src = image[index]
}