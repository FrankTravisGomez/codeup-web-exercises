// array if user objects
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

// 1)Create a file named map-filter-reduce.js in your js directory and copy the users data below into it. COMPLETE

// 2) Use .filter to create an array of user objects where each user object has at least 3
// languages in the languages array. COMPLETE!
let lang = users.filter(function(user){
    return user.languages.length >= 3;
})
console.log(lang)

// 3)Use .map to create an array of strings where each element is a user's email address. COMPLETE
let em = users.map(function(mail){
    return mail.email
})
console.log(em)

// 4)Use .reduce to get the total years of experience from the list of users. Pt one done
// Once you get the total of years you can use the result to calculate the average.Pt two done
//COMPLETE
let yearsOfExperience = users.reduce(function(years,people){
    return years + people.yearsOfExperience
}, 0)
console.log(yearsOfExperience / users.length)

// 5)Use .reduce to get the longest email from the list of users.
let email =users.reduce(function(accum,user ){
    if(user.email.length > accum.length){
        return user.email
    }else{
        return accum
    }
},"")
console.log(email)

//6)Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.
let userName = users.reduce(function (string, num){
    return string + num.name + " | ";
},"list of names: ")
console.log(userName)

//BONUS DLC
//Use .reduce to get the unique list of languages from the list of users.
let unique =users.reduce(function(accum,user ){
    if(user.languages.length > accum.length){
        return user.languages
    }else{
        return accum
    }
},"")
console.log(unique)