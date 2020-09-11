import { onSnake, expandSnake } from './snake.js'

let apple = { x: 10, y: 5 }
const EXPANSION_RATE = 1


export function update(apple) {
    if (onSnake(apple)) {
        expandSnake(EXPANSION_RATE)
        apple = { x: 15, y: 15 }
    }
}

export function draw(gameBoard) {
    const appleElement = document.createElement('div')
    appleElement.style.gridRowStart = apple.x
    appleElement.style.gridColumnStart = apple.y
    appleElement.classList.add('apple')
    gameBoard.appendChild(appleElement)
}
