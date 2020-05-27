/* PSEUDO CODE
√ Set display for board to none and then on click for play, set display to inline-grid
On landing page, create a prompt for User name input
create a new user with this input
User input will include a default picture if they don't upload one.
*/
const users = 'http://localhost:3000/users'
const header = document.querySelector('#header')
let board = document.querySelector('#grid')
board.style.display = "none"
displayLandingPage()

function boardDisplayOnOff(){
    if (board.style.display = "none"){
        board.style.display = "inline-grid"
    } else if (board.style.display = "inline-grid"){
        board.style.display = "none"
    }
}

function displayLandingPage(){
    const createNamePrompt = document.createElement("h2")
    createNamePrompt.innerHTML = `
    <h2> Enter a username: 
        <input class="createNameTextField" type="text">
        <button id="play" class="playBtn"> Play </button>
    </h2>
    `
    header.appendChild(createNamePrompt)
}

const playBtn = document.querySelector('.playBtn')

playBtn.addEventListener('click', event => {
    // console.log(event.target)
    header.style.display = "none"
    boardDisplayOnOff()
})


