const axios = require("axios");

async function showGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await axios.get(url);
  const user = await response.data;
  console.log(user.name);
  console.log(user.location);
}

showGitHubUser("gokusenz");
