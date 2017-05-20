// Handle Errors
const axios = require("axios");

async function fetchGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await axios.get(url);

  const user = await response.data;
  return user;
}

async function showGitHubUser(handle) {
  const user = await fetchGitHubUser(handle);
  console.log(user.name);
  console.log(user.location);
}

showGitHubUser("idonotexists");
