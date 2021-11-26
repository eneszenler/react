const users = ["Yusuf", "Ahmet", "Ayşe"];

const users2 = [{
        name: "Yusuf",
        age: 21,
    },
    {
        name: "Hamit",
        age: 31,
    },
    {
        name: "Hamit",
        age: 33,
    },
    {
        name: "Mahmut",
        age: 27,
    }
]

/*
    push
    map
    find
    filter
    some
    every
    includes
*/

// PUSH //
// users.push("Fatma");
// console.log(users);

// MAP(Döngü ile tüm elemanları döndürmek yerine kullanılıyor) //
// users.map((item) => {
//     console.log(item)
// })

// FIND //
// const result = users.find((item) => item === "Yusuf");
// console.log(result);

// const result2 = users2.find((item) => item.name === "Hamit" && item.age > 20);
// console.log(result2);

// FILTER //
// const filtered = users2.filter((item) => item.name === "Hamit");
// console.log(filtered);

// SOME //
// const some = users2.some(({ name, age }) => name === "Yusuf");
// console.log(some);

// EVERY //
// const every = users2.every(({ age }) => age > 10);
// console.log(every);

// INCLUDES //
const isIncluded = users2.includes(({ name }) => name === "Yusuf");
console.log(isIncluded);