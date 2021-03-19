//console.log('test12321')
const playerCells = Array.from(document.getElementsByClassName('cell-player'));
const computerCells = Array.from(document.getElementsByClassName('cell'));
let playerNavy
let computerNavy 

console.log(computerCells)
console.log(playerCells)


//The player can select any of the squares on the computer's board.
computerCells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        cell.classList.add('active')
    })
})
//The computer picks a random cell on the board to declare as hit.
let randomPlayerCells = playerCells[Math.floor(Math.random() * playerCells.length)].classList.toggle('active')

console.log(randomPlayerCells)

