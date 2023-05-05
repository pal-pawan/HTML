// Game Constants and variables
const foodSound = new Audio('eat_game.mp3');
const gameOverSound =new Audio('game-over_game.mp3');
const moveSound =new Audio('direction_change_game.mp3');
const musicSound =new Audio('music_background_game.mp3');
let inputDir ={x: 0, y:0};
let speed = 6;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [
    {x: 0, y: 0}
]
let food = {
    x:13, y:15
};

// game functions 
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
    
}
function isCollide(snake){
        // if snake bumps into itself
        for (let i = 1; i < snakeArr.length; i++){
            if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
                return true;
            }
        }
        // if snake bumps into the wall 
            if(snake[0].x >=18 || snake[0].x <=0 || snake[0].y >=18 || snake[0].y <=0){
                return true;
            }
}

function gameEngine(){
    // part 1: updating the snake array(position of snakes body)
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x:0, y:0};
        alert("Game Over!, press any key to restart");
        snakeArr = [{x:13, y:15}];
        musicSound.play();
        score = 0;
    }

    // if food is eaten, increment the score and regenerate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        foodSound.play();
        score +=10;
        scoreBox.innerHTML = "Score :- "+ score;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.y, y: snakeArr[0].y + inputDir.y})
        let a = 1;
        let b = 17;
        food = {x: Math.round(a+(b-a)* Math.random()), y: Math.round(a+(b-a)* Math.random())}
    }

    //moving the snake
    for (let i = snakeArr.length - 2; i >=0; i --){
        snakeArr[i+1] = {...snakeArr[i]};
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;


    // part 2: Displaying the food and the snake
    // displaying the snake

    game_board.innerHTML = ""; //to make the board empty
    snakeArr.forEach((e, index)=>{
        snakeElment = document.createElement('div');
        snakeElment.style.gridRowStart =  e.y;
        snakeElment.style.gridColumnStart = e.x;
        
        if(index === 0){
            snakeElment.classList.add('head');
        }
        else{
            snakeElment.classList.add('snake');
        }
        game_board.appendChild(snakeElment);
    });

    // displaying the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    game_board.appendChild(foodElement);
}

// main logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown', e=>{
    inputDir = {x: 0, y:1} // Start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x =1;
            inputDir.y = 0;
            break;

        default:
            break;
    }
});