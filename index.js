// Object Destructuring

const user = {
    name: 'John',
    age: 30
}

const {name, age} = user;

console.log(name);


// Spread Operator ...

const numbers = [1, 2, 3];
const middleNumbers = [4, 5, 6, 7]
const newNumbers = [...numbers, ...middleNumbers, 8, 9, 10]

console.log(newNumbers);


// Object copy

const person = {name: 'Salman', qualification: 'Master"s'};
const updateUser = {...person, age: 25};

console.log(updateUser);


// Array map

const users = ['Salman', 'Shahrukh', 'Qasim', 'Gulmehar']
const userList = document.querySelector('.user-list');

const newUsers = [...users, 'A Qadir', 'Asfahan'];

users.map((user) => {
    console.log(user);    
});


// Array map

userList.innerHTML = newUsers
.map((user) => `<li class="user-list">${user}</li>`)
.join('');


// filter()

const evenNumbers = newNumbers.filter((n) => n % 2 === 0);

console.log(evenNumbers);


// Home work

const products = [
    {
        id: 1,
        name: 'Mobile',
        price: 50000
    },
    {
        id: 2,
        name: 'Laptop',
        price: 100000
    }
]

const productNames = products.map((product) => product.name);

const filterProduct = products.filter((product) => product.price > 60000);

const newProduct = 
    {
        id: 3,
        name: 'Tablet',
        price: 120000
    }

const updateProduct = [...products, newProduct]

console.log(productNames);

console.log(filterProduct);

console.log(updateProduct);


const newPerson = {
    newName: 'Salman',
    newAge: 25
}

const updateNewPerson = {...newPerson, newAge: 30}   

console.log(updateNewPerson);



function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

const addArrow = (a, b) => a + b;

const subArrow = (c, d) => c - d;

console.log(addArrow(1, 2));

console.log(subArrow(10, 4));




