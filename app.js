//console.log('test12321')
const playerCells = Array.from(document.getElementsByClassName('cell-player'));
const computerCells = Array.from(document.getElementsByClassName('cell'));
const computerFleet = ['carrier', 'battleship', 'destroyer', 'cruiser', 'frigate', 'submarine']

console.log(computerCells)
// for(let i =0; i < playerCells.length; i++){
    
// }
//trying to put ships into array so I can loop through them with one Math.random function
//Instead of what I'm doing below.
// for(let i = 0; i < computerFleet.length; i++){
//     computerFleet.forEach((cell, index) => {
//         computerFleet.add
//     })
// }

//for(let j =0; j < computerCells.length; j++){
   //let randomCellSelector = computerCells[Math.floor(Math.random() * computerCells.length)].classList.toggle('active')
//}

// let carrier = computerCells[Math.floor(Math.random() * computerCells.length)].classList.add('hidden')
// let battleship = computerCells[Math.floor(Math.random() * computerCells.length)].classList.add('hidden')
// let destroyer = computerCells[Math.floor(Math.random() * computerCells.length)].classList.add('hidden')
// let cruiser = computerCells[Math.floor(Math.random() * computerCells.length)].classList.add('hidden')
// let frigate = computerCells[Math.floor(Math.random() * computerCells.length)].classList.add('hidden')
// let submarine = computerCells[Math.floor(Math.random() * computerCells.length)].classList.add('hidden')

// const computerGrid = document.querySelector('computer-grid')

// computerGrid.addEventListener('click', () => {

// })

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const idLocations = []


for(let i =1;  i < 7; i++){
    let randomLetters = Math.floor(Math.random() * letters.length)
    //console.log(letters[randomLetters])
    
    let randomNumbers = Math.floor(Math.random() * numbers.length)
    //console.log(numbers[randomNumbers])
    
    let randomId = letters[randomLetters] + numbers[randomNumbers]
    //console.log(randomId)

    idLocations.push(randomId)

    document.querySelector(`#${randomId}`).classList.add('hidden')
}

idLocations.forEach((value) => {
    document.getElementById('value').addEventListener('click', () => {
        console.log(value, 'click')
    })
})

console.log(idLocations)

// let randomLetters = Math.floor(Math.random() * letters.length)
// console.log(letters[randomLetters])

// let randomNumbers = Math.floor(Math.random() * numbers.length)
// console.log(numbers[randomNumbers])

// let randomId = letters[randomLetters] + numbers[randomNumbers]
// console.log(randomId)

// computerCells.forEach((cell, index) => {
//     cell.addEventListener('click', () => {
//         cell.classList.add('active')
//     })
// })

// const randomCellSelector = () => {
//     const rowA = Array.from(document.getElementsByClassName('row-a'))
//     const randomIndex = Math.floor(Math.random() * rowA.length)
//     rowA[randomIndex].classList.add('active')
//     console.log(rowA)
// }

// const randomCellSelector = (cell) => {
//     let row = document.body.offsetHeight-cell.clientHeight
//     let column = document.body.offsetWidth-cell.clientWidth
//     let randomRow = Math.floor(Math.random() * row)
//     let randomCol = Math.floor(Math.random() * column)

// }
// window.onload = function() {
//     let square = document.createElement('p')
//     document.body.appendChild('p')
// }

const addShip = (cell) => {
    const battleship = document.createElement('p').innerHTML = 'X'
    document.body.appendChild(computerCells)
}

// let gameParameters = {
//     playGridSize: 10,
//     computerGridSize: 10,
//     shipLength: 1,
//     shipSunk: 0,

//     fleet: [
//         {positions: [0], hits: ['']},
//         {positions: [0], hits: ['']},
//         {positions: [0], hits: ['']},
//         {positions: [0], hits: ['']}
//     ]
// }
