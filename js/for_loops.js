'use strict';
function showMultiplicationTable(number){
    for(var i=1; i< 10; i++){
        console.log(number + "x" + i + "="+(number * i));
   }
}
showMultiplicationTable(7);

for(var i=0; i<10; i++){
    var random= Math.floor(Math.random()*180 +20)
}console.log(random);
if(random %2 ===0){
    console.log(random+" is even")
}else if(random %2=== 1);
console.log(random + " is odd")

for(var i=1; i<=9; i++){
    var iString ="";
    for(var n=1; n<=i; n++){
        iString +=i;
        console.log(iString);
    }
}

for(var i=100; i>=5; i=i-5){
    console.log(i);
}