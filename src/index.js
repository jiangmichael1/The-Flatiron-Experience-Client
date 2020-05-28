const usersUrl = 'http://localhost:3000/users'
const urlHeaders= {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

const header = document.querySelector('#header')
const landingPageObjects = document.querySelector('#container')
const playBtn = document.querySelector('.playBtn')
const dieBtn = document.querySelector('.dieBtn')
let board = document.querySelector('#grid')

board.style.display = "none"

playBtn.addEventListener('click', event => {
    landingPageObjects.remove()
    playBtn.remove()
    boardDisplayOnOff()
    createPlayerPiece()
})

dieBtn.addEventListener('click', event => {
    rollDice()
    movePlayerPiece()
    
})

function rollDice(){
    let die1 = document.getElementById('die1')
    // let die2 = document.getElementById('die2')
    let status = document.getElementById('status')
    let d1 = Math.floor(Math.random() * 6) + 1
    // let d2 = Math.floor(Math.random() * 6) + 1
    let diceTotal = d1
    die1.innerHTML = d1
    // die2.innerHTML = d2
}

function boardDisplayOnOff(){
    if (board.style.display = "none"){
        board.style.display = "inline-grid"
    } else if (board.style.display = "inline-grid"){
        board.style.display = "none"
    }
}

function createPlayerPiece(){
    const playerPiece = document.createElement('span')
    const startTile = document.getElementById('1')
    playerPiece.className = "playerPiece"
    startTile.appendChild(playerPiece)
}

function movePlayerPiece(){
    const playerPiece = document.querySelector('.playerPiece')
    const idOfCurrentTile = parseInt(document.querySelector('.playerPiece').parentNode.id)
    let rollNumber = parseInt(die1.textContent)
    let idOfTileToMoveTo = idOfCurrentTile + rollNumber
    playerPiece.remove()
    let tileToMoveTo = document.getElementById(`${idOfTileToMoveTo}`)
    tileToMoveTo.appendChild(playerPiece)
}


