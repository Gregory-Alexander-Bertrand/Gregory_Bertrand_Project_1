//console.log('test12321')
const playerCells = Array.from(document.getElementsByClassName('cell-player'));
const computerCells = Array.from(document.getElementsByClassName('cell'));
let thePlayer = 'player'
let gameOver = false
let playerFleet = []
const ships = ['carrier', 'battleship', 'destroyer', 'cruiser', 'frigate', 'submarine']





// let carrier = computerCells[Math.floor(Math.random() * computerCells.length)].classList.add('hidden')
// let battleship = computerCells[Math.floor(Math.random() * computerCells.length)].classList.add('hidden')
// let destroyer = computerCells[Math.floor(Math.random() * computerCells.length)].classList.add('hidden')
// let cruiser = computerCells[Math.floor(Math.random() * computerCells.length)].classList.add('hidden')
// let frigate = computerCells[Math.floor(Math.random() * computerCells.length)].classList.add('hidden')
// let submarine = computerCells[Math.floor(Math.random() * computerCells.length)].classList.add('hidden')

//The following 3 arrays corespond with the for loop below, each were randomized and joined together
//So the for loop would spit out a random ID index that tell the location of the ships.
//Tim Mok helped me with this.

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const idLocations = []


for(let i =1;  i < 7; i++){
    let randomLetters = Math.floor(Math.random() * letters.length)
    //console.log(letters[randomLetters])
    
    let randomNumbers = Math.floor(Math.random() * numbers.length)
    //console.log(numbers[randomNumbers])
    
    let randomId = letters[randomLetters] + numbers[randomNumbers]
    console.log(randomId)

    idLocations.push(randomId)

    document.querySelector(`#${randomId}`).classList.add('hidden')
    
    
}

// idLocations.forEach((idLocation, randomId) => {
//     randomId.addEventListener('click', () => {
//         console.log(randomId, 'click')
//     })
// })
const rowA = Array.from(document.getElementsByClassName('row-a'));
rowA.forEach((row, index, cell) => {
    row.addEventListener('click', () => {
       document.querySelectorAll('.cell').classList.remove('hidden')
    })
})



// randomId.addEventListener('click',(e) => {
//     console.log('click')
// })

// playerCells.forEach((cell, index) => {
//     cell.addEventListener('click', () => {
//         cell.classList.add('active')
//     })
// })

// for(let j = 1; j < 7; j++){
//     playerCells.forEach((cell, index) => {
//         cell.addEventListener('click', () => {
//            if(playerCells.length < 6){
//                cell.classList.add('active')
//            }
//         })
//     })
// }

//I'm trying to make it so the player/user can only click six squares.

playerOptions = ['', '', '', '', '', '']

playerCells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        console.log('click')
        if(playerOptions.length < 6){
            cell.classList.add('active')
        } else {
            cell.classList.remove('active')
        }
    })
})