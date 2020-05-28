/* PSEUDO CODE
√ Set display for board to none and then on click for play, set display to inline-grid
On landing page, create a prompt for User name input
Ask for upload img - or not
create a new user with this input
User input will include a default picture if they don't upload one.
*/
const usersUrl = 'http://localhost:3000/users'
const urlHeaders= {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

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
    let createUserValue = document.querySelector('.createNameTextField').value
    // console.log(createUserValue)
    fetch(usersUrl, {
        method: 'POST',
        headers: urlHeaders,
        body: JSON.stringify({
            name: `${createUserValue}`,
            skills: none,
            coding_knowledge: 0,
            img_url: "https://www.asbmb.org/img/content-images/generic-user.jpg",
            turns: 0
        })
    })
    header.style.display = "none"
    boardDisplayOnOff()
})


