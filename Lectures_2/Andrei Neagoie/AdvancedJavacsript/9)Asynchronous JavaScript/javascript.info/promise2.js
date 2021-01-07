/* function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(src);
    return new Promise((resolve, reject) => {
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Error for ${src}`));
    });
}

loadScript("app1")
    .then(script => loadScript("app2.js"))
    .then(script => loadScript("app3.js"))
    .catch(error => console.log("error coousred"));

loadScript("app1").then(app1 => {
    loadScript("app2").then(app2 => {
        loadScript("app3").then(app3 => console.log("App3 is loaded"));
    });
}); */

// the execution: catch -> catch -> then


// the execution: catch -> then


/* new Promise((resolve, reject) => {
    setTimeout(() => {
        //throw new Error("Whoops!");
        reject("Rejected");
    }, 1000);
}).catch(error => {
    console.log("Error caught");
}).then(value => {
    console.log("secodn then");
}); */


/* setTimeout(() => console.log("SetTime"), 0);
Promise.resolve("sumit").then(value => console.log(value));
console.log("This is console statement"); */

function loadJson(url) {
    return fetch(url)
        .then(response => response.json());
}

function loadGithubUser(name) {
    return fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json());
}

function showAvatar(githubUser) {
    return new Promise(function(resolve, reject) {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    });
}

// Use them:
loadJson('/article/promise-chaining/user.json')
    .then(user => loadGithubUser(user.name))
    .then(showAvatar)