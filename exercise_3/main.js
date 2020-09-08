let gameBoard = document.getElementsByClassName('gameboard')[0]
let moleHoles = document.getElementsByClassName('mole-hole')
let points = document.getElementsByClassName('points')[0].innerText


let startButton = document.getElementsByClassName('start-button')[0]
startButton.addEventListener('click', startGame)

let mole = document.getElementsByClassName('mole')[0]

function startGame(event) {
    let myGame = setInterval(appearMole, 2800)
    setTimeout(function() { 
        clearInterval( myGame );
        alert('Game over')
    }, 60000);
}

function appearMole() {
    const randomMoleHole = moleHoles[Math.floor(Math.random() * moleHoles.length)];
    randomMoleHole.classList.add('mole')
    randomMoleHole.addEventListener('click', addPoint)
    setTimeout(removeMole, 800, randomMoleHole)
}


function removeMole(randomMoleHole) {
    randomMoleHole.classList.remove('mole')
}

function addPoint(event) {
    let m = event.target
    let myPoints = parseInt(document.getElementsByClassName('points')[0].innerText)
    if (m.innerText == document.getElementsByClassName('mole')[0].innerText) {
        myPoints += 1
    }
    document.getElementsByClassName('points')[0].innerText = myPoints
}