const url = 'https://api.github.com/users';
// Utility fn to fetch repo counts
const fetchPublicReposCount = async (username) => {
  const response = await fetch(`${url}/${username}`);
  const json = await response.json();
  return json['public_repos'];
}


//sequential fech
async function fetchAllCounts(users) {
  const counts = [];
  for (let i = 0; i < users.length; i++) {
    const username = users[i];
    const count = await fetchPublicReposCount(username);
    counts.push(count);
  }
  return counts;
}

//parallel execution
async function fetchAllCounts(users) {
  const promises = users.map(async username => {
    const count = await fetchPublicReposCount(username);
    return count;
  });
  return Promise.all(promises);
}