import axios from 'axios';

export const getData = (id) => {
    return new Promise(async(resolve, reject) => {
        const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + id);
        const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + id);
        resolve([users, posts]);
    })
}