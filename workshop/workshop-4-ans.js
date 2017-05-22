// Await Multiple Promises Concurrently with Promise.all()
const axios = require("axios");

async function fetchFromGitHub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const response = await axios.get(url);
  return await response.data;
}

async function showUserAndRepos(handle) {
  const [user, repos] = await Promise.all([
    fetchFromGitHub(`/users/${handle}`),
    fetchFromGitHub(`/users/${handle}/repos`)
  ]);

  console.log(user.name);
  console.log(`${repos.length} repos`);
}

showUserAndRepos("gokusenz");
