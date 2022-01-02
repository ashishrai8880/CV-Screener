console.log("CV sCreener");
let data = [
    {
        name: "Ashish Rai",
        image: 'https://randomuser.me/api/portraits/men/75.jpg',
        city: "Delhi",
        age: 23,
        language: "Python",
        framework: "Django"
    },
    {
        name: "Lina Maria Paul",
        image: 'https://randomuser.me/api/portraits/women/26.jpg',
        city: "Bangalore",
        age: 21,
        language: "Java",
        framework: "No"
    },
    {
        name: "Larry Eliza David",
        image: 'https://randomuser.me/api/portraits/women/27.jpg',
        city: "Mumbai",
        age: 43,
        language: "JavaScript",
        framework: "Bootsrap"
    },
    {
        name: "Suraj Gupta",
        image: 'https://randomuser.me/api/portraits/men/79.jpg',
        city: "Bihar",
        age: 34,
        language: "C++",
        framework: "No "
    },
    {
        name: "Sheikh Rubina",
        image: 'https://randomuser.me/api/portraits/women/49.jpg',
        city: "Gurgaon",
        age: 36,
        language: "HTML , CSS",
        framework: "Talwind CSS "
    },
    {
        name: "Cammello Cabilo",
        image: 'https://randomuser.me/api/portraits/women/59.jpg',
        city: "San Francisco",
        age: 44,
        language: "JavaScript",
        framework: "No "
    }
];

function cvIterator() {
    let index = 0;
    return {
        next: function () {

            if (index <= data.length) {
                return { value: data[index++], done: false };
            }
            else {
                return { done: true }
            }
        }
    }
}

const iterator = cvIterator(data);
change();
let next = document.getElementById('next');
next.addEventListener('click', change);

function change() {
    let info = iterator.next().value;
    // console.log(info);
    if (info != undefined) {
        let image = document.getElementById('image');
        image.innerHTML = `<img src='${info.image}'>`
        let profile = document.getElementById('profile');
        profile.innerHTML = `<ul class="list-group">
            <li class="list-group-item">Name : ${info.name}</li> 
            <li class="list-group-item">${info.age} year old</li> 
            <li class="list-group-item">Lives in ${info.city}</li> 
            <li class="list-group-item">Primarily works in ${info.language}</li> 
            <li class="list-group-item">Uses ${info.framework} framwork</li>     
        </ul>`
    }else{
        alert("End of Cadidate Application");
    }
}