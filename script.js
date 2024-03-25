let out = document.getElementById("output")
let img = document.getElementById("image")
let index = 0


let arrObj = [
    {
        name: 'Full Name: Fatokun Emmanuel',
        age: 'Age: 25',
        mail: 'E-mail: emmanuel@gmail.com',
        nationality: 'Nationality: Nigeria',
        skin: 'Skin Color: Brown',
        image: "avatar7.png"
    },
    {
        name: 'Full Name: Ariyo Esther',
        age: 'Age: 7 ',
        mail: 'E-mail: emmanuel@gmail.com',
        nationality: 'Nationality: Nigeria',
        skin: 'Skin Color: Brown',
        image: "avatar2.png"
    },
    {
        name: 'Full Name: Adeosun Damilare',
        age: 'Age: 6 ',
        mail: 'E-mail: emmanuel@gmail.com',
        nationality: 'Nationality: Nigeria',
        skin: 'Skin Color: Brown',
        image: "avatar3.png"
    },
    {
        name: 'Full Name: Popoola Faruq',
        age: 'Age: 9 ',
        mail: 'E-mail: emmanuel@gmail.com',
        nationality: 'Nationality: Nigeria',
        skin: 'Skin Color: Brown',
        image: "avatar6.png"
    },
    {
        name: 'Full Name: Balogun Aliyah ',
        age: 'Age: 10 ',
        mail: 'E-mail: emmanuel@gmail.com',
        nationality: 'Nationality: Nigeria',
        skin: 'Skin Color: Brown',
        image: "avatar4.png"
    }
];

function display() {
    img.src = arrObj[index].image
    out.innerHTML = `<h4>
    ${arrObj[index].name} <br> 
    ${arrObj[index].age}<br>
    ${arrObj[index].mail}<br>
    ${arrObj[index].nationality}<br>
    ${arrObj[index].skin}<br>
    </h4>`
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


