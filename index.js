const app = "I don't do much.";

const token = '8b0abf5aa43311f57b3981a732990aafd99132ca'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
