var userInput="";
while(true){
    userInput= Number(prompt("enter odd number between 1 and 50"));
    if(userInput %2===1 && userInput>=1&& userInput <50){
        break;
    }
}
for(var i=1; i<50; i+=2){
    if(i=== userInput){
        console.log("no gotta skip"+i);
        continue;
    }
    console.log("here is an odd number"+i);
}