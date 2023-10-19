const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//const noLanguagesUser = users.filter(function(user) {
// if (user.languages.length >= 3) {
//     return true;
// }
// return false;
// });
//console.log(noLanguagesUsers);
const usersWithThreeOrMoreLanguages = users.filter (users => users.languages.length >= 3);
// console.log(usersWithThreeOrMoreLanguages)

//const emails = users.map(function(user) {
//return user.email;
//});
//console.log(emails);
const usersEmailAddress = users.map ( users => users.email);
// console.log(usersEmailAddress)

//const totalYears = users.reduce(function(totalSoFar, user) {
//return totalSoFar + user.yearsOfExperience;
//}, 0);
//console.log(totalYears)
//console.log(totalYears/ users.length)
const totalExperience = users.reduce((total,users) => total + users.yearsOfExperience, 0);
// console.log(totalExperience)
const averageExperience = totalExperience / users.length;
// console.log(averageExperience)

//const longestEmail = users.reduce(function(longestSoFar, user){
//if(user.email.length > longestSoFar.length) {
//return user.email;
//}
//return longestSoFar;
//}, users [0].email);
const longestEmail = users.reduce ((longest, user) => {
    return user.email.length > longest.length ? user.email : longest;
}, '');
console.log(longestEmail)

const names = users.reduce(function(namesSoFar, user) {
    if(namesSoFar.length >0 ) {
        //if not the first itteration then prepend a ,
        namesSoFar += " , ";
    }
    return namesSoFar + " , " + user.name;
}, "");
console.log("Your instructors are: " +names);

const names2 = users.map(function(user) {
    return user.name;
});
console.log(names2.join(" , "));

//BONUS
const languagesSet = users.reduce(function (setSoFar, user) {
    for (let i = 0; i < user.languages.length ; i++) {
        setSoFar.add(user.languages[i])
    }
  return setSoFar;
}, new Set());
console.log(languagesSet)