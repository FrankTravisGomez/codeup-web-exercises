console.log("is it working")

// 1)Create a file named promises.js inside-of your js directory
// and link it to an HTML file of your choice. COMPLETE


// fetch('url/token', {token})
//  .then(res => res.json() )
//     .then(data => {
//        console.log(data)
//     })


// 2)Generate a Personal Access Token for the GitHub API. COMPLETE
//the code underneath is for a fetch request from my git-hub to pull my commit info
// .json object looks like javascript object, but will take fetch response and turn it into a json object
fetch(`https://api.github.com/users/FrankTravisGomez/events/public`, {Authorization: githubKey}).then( res => res.json()).catch(error => console.error(error.message))
    .then(events => events.filter(event => event.type === "PushEvent"))
    .then(events => events[0].created_at)
    .then(function(data){

        console.log(data)
    })
// 3)Create a function that accepts a GitHub username,COMPLETE
// and returns a promise that resolves returning just the date of the last commit that user made.
// Reference the git-hub api documentation to achieve this.
// function gitLast(user){
// }
// function gitLast(user){
//     fetch(`https://api.github.com/users/FrankTravisGomez/events/public`, {Authorization: githubKey}).then(res => res.json())
//         .then(events => events.filter(event => event.type === 'PushEvent')[29]);
//     console.log(user)
// }

fetch(`https://api.github.com/users/FrankTravisGomez/events/public`, {Authorization: githubKey}).then( res => res.json()).catch(error => console.error(error.message))
    .then(function(data){
        // return new Promise(info);{
        //     return pushEvent
        // }
        console.log(data)
    })


// 1)Write a function named wait that accepts a number as a parameter,
// and returns a promise that resolves after the passed number of milliseconds. COMPLETE
// As a bonus make sure the promise resolves with the milliseconds in return,
// so you can make the console log message more dynamic. COMPLETE
// function wait and a return for a promise to resolve and reject using Math.random with a timer set to 3000 COMPLETE
function wait() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('3 second or something idk');
            } else {
                reject('REJECTED');
            }
        }, 3000);
    });
}

const request = wait();
console.log(request);
request.then(message => console.log('Good on you Mate!', message));
request.catch(message => console.log('REJECTED', message));

// Promise.resolve('one').then((one) => {
//     console.log(one);
//     return 'two';
// }).then((two) => {
//     console.log(two);
//     return 'three';
// }).then((three) => {
//     console.log(three);
//     return 'ribbit'
// }).then((ribbit) =>{
//     console.log(ribbit)
// })
