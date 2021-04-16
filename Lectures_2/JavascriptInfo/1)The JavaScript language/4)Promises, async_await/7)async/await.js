//implementation by promise chaining

fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise(function(resolve, reject) { // (*)
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser); // (**)
    }, 3000);
  }))
  // triggers after 3 seconds
  .then(githubUser => console.log(`Finished showing ${githubUser.name}`));


//implementation by Async/await

async function showAvatar() {
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json;

    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
    
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    });
}

showAvatar().then(githubUser => console.log(`Finished showing ${githubUser.name}`));


