console.log("is it working")

// 1)Create a file named promises.js inside-of your js directory
// and link it to an HTML file of your choice. COMPLETE

// 2)Generate a Personal Access Token for the GitHub API. COMPLETE

// 3)Create a function that accepts a GitHub username,
// and returns a promise that resolves returning just the date of the last commit that user made.
// Reference the github api documentation to achieve this.
// fetch('url/token', {token})
//  .then(res => res.json() )
//     .then(data => {
//        console.log(data)
//     })


fetch(`https://api.github.com/users/FrankTravisGomez/events/public`, {Authorization: githubKey}).then( res => res.json())
    .then(function(data){
        
        console.log(data)
    })

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
