// Await Multiple Promise Sequentially or Concurrently
const axios = require("axios");

async function fetchFromGitHub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const response = await axios.get(url);
  return await response.data;
}

async function showUserAndRepos(handle) {
  const user = await fetchFromGitHub(`/users/${handle}`);
  const repos = await fetchFromGitHub(`/users/${handle}/repos`);

  console.log(user.name);
  console.log(`${repos.length} repos`);
}

showUserAndRepos("gokusenz");
