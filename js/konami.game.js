//for the box that fits the game
var blockSize= 25;
var row = 20;
var cols = 20;
var board;
var context;

//snake head
var snakeX= blockSize *5;
var snakeY= blockSize *5;

// velocity
var velocityX= 0;
var velocityY= 0;
//snake body open array to add more parts
var snakeBody= [];

//food
var foodX;
var foodY;
// when the player loses
var gameOver = false;
// function for the board and food placement within it
window.onload= function(){
    board= document.getElementById("board");
    board.height = row * blockSize;
    board.width= cols * blockSize;
    context =board.getContext("2d");
//food placement using event listener to change the direction
    placeFood();
    document.addEventListener("keyup", changeDirection);
    // how fast the body moves
    setInterval(update, 1000/10);
}

function update(){
    if(gameOver){
        return;
    }
    //the box containing the game with x and y, axis
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);
    //the snake food along x and y, axis within the block
    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
    // conditional for snake body and food
    if(snakeX === foodX && snakeY === foodY){
        snakeBody.push([foodX, foodY])
        placeFood();
    }

    for (let i = snakeBody.length-1; i >0; i--){
        snakeBody[i] = snakeBody[i-1];
    }
    if(snakeBody.length){
        snakeBody[0] = [snakeX, snakeY];
    }
    //for loop when snake eats
    context.fillStyle="green";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for( let i = 0; i < snakeBody.length; i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize,blockSize);
    }
    //game over conditional
    if(snakeX <0 || snakeX > cols*blockSize || snakeY <0 || snakeY > row*blockSize){
        gameOver = true;
        alert("YOU SICKEN ME!");
    }
    for(let i =0; i < snakeBody.length; i++){
        if(snakeX === snakeBody[i][0]&& snakeY === snakeBody [i][1]){
            gameOver = true;
            alert("YOU SICKEN ME!");
        }
    }
}
//function and conditionals for body control
function changeDirection(e){
    if(e.code=== "ArrowUp" && velocityY !== 1){
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code=== "ArrowDown" && velocityY !== -1){
        velocityX = 0;
        velocityY = 1;
    }
     else if(e.code=== "ArrowLeft" && velocityX !== 1){
         velocityX = -1;
         velocityY = 0;
     }
     else if(e.code=== "ArrowRight" && velocityX !== -1){
         velocityX = 1;
         velocityY = 0;
     }
}
// food placement at random with the help os math.floor and math.random will place food random when it gets eaten
function placeFood(){
    foodX= Math.floor(Math.random() * cols) * blockSize;
    foodY= Math.floor(Math.random() * row) * blockSize;
}