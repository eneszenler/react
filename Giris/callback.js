// setTimeout(() => {
//     console.log("1. Saniyede çalıştı")
// }, 1000);

// setInterval(() => {
//     console.log("Sürekli çalıştı")
// }, 2000);

// const sayHello = (cb) => {
//     cb();
// };

// sayHello(() => {
//     console.log("Hello");
// });

import fetch from 'node-fetch';
import axios from 'axios';
import { user } from './my-module';

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => {
//         console.log("Users Yüklendi !!", users);

//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then((data) => data.json())
//             .then((posts) => {
//                 console.log("İlk Post Yüklendi!!", posts)

//                 fetch("https://jsonplaceholder.typicode.com/posts/2")
//                     .then((data) => data.json())
//                     .then((posts) => {
//                         console.log("İkinci Post Yüklendi!!", posts)
//                     })
//             })
//     });

// async function getData() {
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log("Kullanıcılar", users);
//     console.log("Post 1", post1);
//     console.log("Post 2", post2);
// }

// getData();

// async function getData() {
//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");

//     const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");

//     const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");

//     console.log("Kullanıcılar", users);
//     console.log("Post 1", post1);
//     console.log("Post 2", post2);
// }

// getData();

// const getcomments = (number) => {
//     return new Promise((resolve, reject) => {
//         if (number === 1) {
//             resolve({ text: "selam" })
//         }

//         reject("Bir Problem Oluştu!!");
//     });
// };

// getcomments(1)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e))

const getUsers = () => {
    return new Promise(async(resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");

        // reject("Bir Sorun Oluştu.");
        resolve(data)
    });
};

const getPost = (post_id) => {
    return new Promise(async(resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts" + post_id);

        // resolve(data);
        reject("Bir Sorun Daha Oluştu.");
    });
};

// (async() => {
//     try {
//         const users = await getUsers();
//         const posts = await getPost(1);

//         console.log(users);
//         console.log(posts);
//     } catch (e) {
//         console.log(e);
//     }
// })

Promise.all([getUsers(), getPost(1)])
    .then(console.log())
    .catch(console.log());