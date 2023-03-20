// let scheduleOne = 'Git Push'
// let scheduleTwo = 'Workout'
// let scheduleThree = 'git dinner'
//
// function addSchedule(schedule){
//     let element= document.createElement('div');
//     element.innerText = schedule;
//     document.body.appendChild(element);
// }
//
// addSchedule(scheduleOne);
// addSchedule(scheduleTwo);
// addSchedule(scheduleThree);

// the above code can be refactored as a forEach loop

let schedule = ['Git Push', 'Workout', 'git dinner'];
// lets add to out array
schedule.push('study more for Monday');

// now time to make a loop

schedule.forEach(function(newSchedule){
    let element= document.createElement('div');
     element.innerText = newSchedule;
     document.body.appendChild(element);
})

// moral of the story type less do more with the power of a loop
