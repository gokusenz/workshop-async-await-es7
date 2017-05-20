// Await Multiple Promise Sequentially or Concurrently
const axios = require("axios");

async function fetchFromGitHub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const response = await axios.get(url);
  return await response.data;
}

async function showUserAndRepos(handle) {
  const userPromise = fetchFromGitHub(`/users/${handle}`);
  const reposPromise = fetchFromGitHub(`/users/${handle}/repos`);

  const user = await userPromise;
  const repos = await reposPromise;

  console.log(user.name);
  console.log(`${repos.length} repos`);
}

showUserAndRepos("gokusenz");
