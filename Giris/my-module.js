const hello = (name) => {
    console.log(`Hello ${name}`)
}

const topla = (a, b) => a + b;
const cikar = (a, b) => a - b;

export const user = {
    name: "Yusuf Enes",
    surname: "Zenler",
    age: 21
}

const users = [{
        name: "Hasan",
        surname: "Cabaz",
        age: "23"
    },
    {
        name: "İlayda",
        surname: "Yılmaz",
        age: "21"
    }
]

export {
    hello,
    topla,
    cikar,
    users
};