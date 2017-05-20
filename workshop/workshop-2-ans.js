const axios = require("axios");

async function fetchGitHubUser(endpoint) {
  const url = `https://api.github.com/users/${endpoint}`;
  const response = await axios.get(url);

  const user = await response.data;
  return user;
}

async function showGitHubUser(handle) {
  try {
    const user = await fetchGitHubUser(handle);
    console.log(user.name);
    console.log(user.location);
  } catch (err) {
    console.log(`Error : ${err}`);
  }
    
}

showGitHubUser("idonotexists");
