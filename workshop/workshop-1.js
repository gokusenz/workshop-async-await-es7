// Convert to Async/await
const axios = require("axios");

function showGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  axios.get(url)
  .then(response => response.data)
  .then(user => {
    console.log(user.name);
    console.log(user.location);
  });
}

showGitHubUser("gokusenz");
