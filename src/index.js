
const usersUrl = 'http://localhost:3000/users'
const urlHeaders= {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

const header = document.querySelector('#header')
const landingPageObjects = document.querySelector('#container')
const playBtn = document.querySelector('.playBtn')
const dieBtn = document.querySelector('.dieBtn')
const centerDisplay = document.querySelector('.center-tile')
const centerDisplayText = document.querySelector('#center-text')
const notYetMsg = document.querySelector('.notYetMsg')
const instructions = document.querySelector('.instructions')
let playerSkills = []
let playerCodingKnowledge = 0
let board = document.querySelector('#grid')

notYetMsg.style.display = "none"
board.style.display = "none"


playBtn.addEventListener('click', event => {
    landingPageObjects.remove()
    playBtn.remove()
    instructions.style.display = "none"
    boardDisplayOnOff()
    createPlayerPiece()
})

dieBtn.addEventListener('click', event => {
    rollDice()
    movePlayerPiece()
    
})

function rollDice(){
    let die1 = document.getElementById('die1')
    let status = document.getElementById('status')
    let d1 = Math.floor(Math.random() * 6) + 1
    let diceTotal = d1
    die1.innerHTML = d1
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

    if (!(idOfTileToMoveTo > 20)){
        notYetMsg.style.display = 'none'
        playerPiece.remove()
        let tileToMoveTo = document.getElementById(`${idOfTileToMoveTo}`)
        tileToMoveTo.appendChild(playerPiece)

        showTileEvents()
        
        function showTileEvents(){
            let eventMessage = document.querySelector('.h4-msg')
            let statusChange = document.querySelector('.h5-msg')

            if (idOfTileToMoveTo === 2){
                eventMessage.textContent = "You resolved an error by visiting Stack OverFlow!"
                statusChange.textContent = "Coding Knowledge + 2"
            } else if (idOfTileToMoveTo === 3){
                eventMessage.textContent = "You hung out with your cohort!"
                statusChange.textContent = "Coding Knowledge + 1"
            } else if (idOfTileToMoveTo === 4){
                eventMessage.textContent = "You installed an outdated extension. It caused bugs!"
                statusChange.textContent = "Coding Knowledge - 2"
            } else if (idOfTileToMoveTo === 5){
                //add skills check
                eventMessage.textContent = "You converted coffee into code!"
                statusChange.textContent = "Coding Knowledge + 2"
            } else if (idOfTileToMoveTo === 6){
                eventMessage.textContent = "You asked a coach for help on your code!"
                statusChange.textContent = "Coding Knowledge + 3"
            } else if (idOfTileToMoveTo === 7){
                eventMessage.textContent = "You took a break from code... and realized a silly error."
                statusChange.textContent = "Coding Knowledge + 1"
            } else if (idOfTileToMoveTo === 8){
                eventMessage.textContent = "Your computer crashed!"
                statusChange.textContent = "Coding Knowledge - 2"
            } else if (idOfTileToMoveTo === 9){
                //add skills check
                eventMessage.textContent = "You attended lecture!"
                statusChange.textContent = "Coding Knowledge + 5"
            } else if (idOfTileToMoveTo === 10){
                eventMessage.textContent = "You attended a review session!"
                statusChange.textContent = "Coding Knowledge + 4"
            } else if (idOfTileToMoveTo === 11){
                eventMessage.textContent = "You hung out with your cohort!"
                statusChange.textContent = "Coding Knowledge + 1"
            } else if (idOfTileToMoveTo === 12){
                eventMessage.textContent = "You installed an outdated extension. It caused bugs!"
                statusChange.textContent = "Coding Knowledge - 2"
            } else if (idOfTileToMoveTo === 13){
                //add skills check
                eventMessage.textContent = "You converted coffee into code!"
                statusChange.textContent = "Coding Knowledge + 2"
            } else if (idOfTileToMoveTo === 14){
                eventMessage.textContent = "You asked a coach for help on your code!"
                statusChange.textContent = "Coding Knowledge + 3"
            } else if (idOfTileToMoveTo === 15){
                eventMessage.textContent = "You took a break from code... and realized a silly error."
                statusChange.textContent = "Coding Knowledge + 2"
            } else if (idOfTileToMoveTo === 16){
                eventMessage.textContent = "Your computer crashed!"
                statusChange.textContent = "Coding Knowledge - 2"
            } else if (idOfTileToMoveTo === 17){
                //add skills check
                eventMessage.textContent = "You attended lecture!"
                statusChange.textContent = "Coding Knowledge + 5"
            } else if (idOfTileToMoveTo === 18){
                eventMessage.textContent = "You attended a review session!"
                statusChange.textContent = "Coding Knowledge + 4"
            } else if (idOfTileToMoveTo === 19){
                eventMessage.textContent = "You attended lecture!"
                statusChange.textContent = "Coding Knowledge + 5"
            } else if (idOfTileToMoveTo === 20){
                //add graduation eligibility check
                eventMessage.textContent = "You attended a review session!"
                statusChange.textContent = "Coding Knowledge + 4"
            }
        }
    } else {
        const startTile = document.getElementById('1')
        startTile.appendChild(playerPiece) 
        notYetMsg.style.display = 'inline-grid'
    }
}









