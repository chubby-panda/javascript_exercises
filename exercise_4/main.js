import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'
import { update as updateApple, draw as drawApple } from './apple.js'


let lastRenderTime = 0
const gameBoard = document.getElementById('gameboard')


function runGame(currentTime) {
    gameID = requestAnimationFrame(runGame)
    const gameSpeed = (currentTime - lastRenderTime) / 1000
    if (gameSpeed < 1 / SNAKE_SPEED) {
        return
    } 
    
    lastRenderTime = currentTime

    updateGame()
    drawGame()
}

let gameID = requestAnimationFrame(runGame)
pauseGame()

function updateGame() {
    updateSnake()
    updateApple()
}

function drawGame() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawApple(gameBoard)
}

function pauseGame() {
    cancelAnimationFrame(gameID)
}    

