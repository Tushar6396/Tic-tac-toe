console.log('Welcome To Tic Tac Toe')

let music = new Audio('./music.mp3')
let turnMusic = new Audio('./ting.mp3')
let gameOver = new Audio('./gameover.mp3')

let reset = document.getElementById('reset')

let turn = 'X'

let isGameover = false

//Function to change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Function to check win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' won'; 
            gameOver.play()
            document.querySelector('.imgContainer').getElementsByTagName('img')[0].style.width = "300px"
            isGameover = true
            music.play()
        }
    })
}

//Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText");
    element.addEventListener('click', () => {
    if (boxText.innerText === "") {
        boxText.innerText = turn;
        turn = changeTurn();
        turnMusic.play();
        checkWin();
        if (!isGameover) {
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    }
})
})

//click listener on reset button
reset.addEventListener('click' , () => {
    let boxtext = document.querySelectorAll('.boxText');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    })
    turn = "X"
    music.pause()
    music.currentTime = 0
    isGameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for X";
    document.querySelector('.imgContainer').getElementsByTagName('img')[0].style.width = "0px"
})

