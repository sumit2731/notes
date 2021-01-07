// if we mispell the url in that case promise is rejected - Promise{<rejected>:TypeError: Failed to fetch}
/* const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

const promises = urls.map(url => fetch(url).then(body => body.json()));

Promise.all(promises).then(value => console.log(value));

Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
    .then(value => console.log(value))
    .catch(error => console.log(error)); */