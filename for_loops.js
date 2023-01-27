'use strict';
function showMultiplicationTable(i){
    var multiple =1;
    while (multiple <= 10){
        console.log(i + "x" + multiple + "=" + (i*multiple));
        ++multiple;

    }return"Done";
}
function getRandomIntInclusive(x, y) {
    x = Math.ceil(20);
    y = Math.floor(200);
    return Math.floor(Math.random() * (y - x + 1) + x);
    for (let x = 20; y < 200; x++) {
        console.log(x,y);
    }
}


