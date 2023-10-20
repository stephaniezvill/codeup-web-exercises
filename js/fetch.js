"use strict";

const Codeup = {
    method: "GET",
    headers: {
        "Authorization": "token " + GITHUB_API_KEY
    }
}

fetch("https://api.github.com/users", Codeup)
    .then(response => response.json())
    .then(data => console.log(data));

fetch("https://api.github.com/users/madmarcos-codeup/events/public", Codeup)
    .then(response => response.json())
    .then(data => console.log(data));