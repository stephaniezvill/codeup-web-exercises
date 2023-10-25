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

fetch("https://api.github.com/users/stephaniezvill/events/public", Codeup)
    .then(response => response.json())
    .then(data => console.log(data));

//alternative showed by dc rob//
async function getUsersLastCommitDate(userName) {
    console.log("1");
    const response = await fetch(`https://api.github.com/users/${userName}/events/public`, Codeup);

    console.log("2");
    const data = await response.json();
    console.log("3");
    console.log(data);
    console.log("4");
    console.log(findAndPrintLastCommit(data));
}

console.log(getUsersLastCommitDate("stephaniezvill"));


function findAndPrintLastCommit(events) {
    // console.log(data)
    // 1. iterate through the event array
    for (let i = 0; i < events.length; i++) {
        // console.log(data[i]);
        // 2. when we find the first PushEvent, return that created_at
        if(events[i].type === "PushEvent") {
            return events[i].created_at;
            // break;
        }
    }
    // 3. if we got here, did not find a pushevent
    // so return undefined
    // console.log("user must be lazy");
    return undefined;
}