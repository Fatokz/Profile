let out = document.getElementById("output")
let img = document.getElementById("image")
let index = 0 


let arrObj = [
    { name: 'Full Name: Emmanuel', age: 'Age: 25', mail: 'E-mail: fatokunemmanuel@gmail.com' , image: "avatar7.png"},
    { name: 'Full Name: Celeb', age: 'Age: 7 ', image: "avatar2.png" },
    { name: 'Full Name: Ayo', age: 'Age: 6 ', image: "avatar3.png" },
    { name: 'Full Name: Tade', age: 'Age: 9 ', image: "avatar6.png" },
    { name: 'Full Name: Tade', age: 'Age: 10 ' , image: "avatar4.png"}
];

function display() {
    img.src = arrObj[index].image
    out.innerHTML = `<h3>${arrObj[index].name} <br> ${arrObj[index].age}</h3>`
}

display()

function next() {
    if (index == arrObj.length - 1) {
        index = 0
    } else {
        index++
    }

    display()
}

function prev() {
    if (index == 0) {
        index = arrObj.length - 1
    } else {
        index--
    }

    display()
}


