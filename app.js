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
const setAnswers = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6']


//for(let i =1;  i < 7; i++){
for(let i =0;  i < 6; i++){
    let randomLetters = Math.floor(Math.random() * letters.length)
    //console.log(letters[randomLetters])
    
    let randomNumbers = Math.floor(Math.random() * numbers.length)
    //console.log(numbers[randomNumbers])
    
    let randomId = letters[randomLetters] + numbers[randomNumbers]
    console.log(randomId)

    idLocations.push(randomId)

    // document.querySelector(`#${randomId}`).classList.add('hidden')
    document.querySelector(`#${setAnswers[i]}`).classList.add('hidden')
    
    
}

document.querySelector('.computer-grid').addEventListener('click', () => {
    console.log('you clicked the computer grid')
    for(let g = 0; g < letters.length; g++){
        const aId = 'A' + numbers[g]
        const bId = 'B' + numbers[g]
        const cId = 'C' + numbers[g]
        const dId = 'D' + numbers[g]
        const eId = 'E' + numbers[g]
        const fId = 'F' + numbers[g]
        const gId = 'G' + numbers[g]
        const hId = 'H' + numbers[g]
        const iId = 'I' + numbers[g]
        const jId = 'J' + numbers[g]
        if(document.getElementById(aId).classList.contains('hidden')){
            console.log('you found me')
            document.getElementById(aId).classList.remove('hidden')
        }
        
    }
})


// idLocations.forEach((idLocation, randomId) => {
//     randomId.addEventListener('click', () => {
//         console.log(randomId, 'click')
//     })
// })

// removeEventListener.onclick = () => {
//     const randomCell = document.querySelector('randomId')
//     if(randomCell.classList.contains('red')){
//         randomCell.classList.remove('red')
//     }
// }

// randomId.addEventListener('click',(e) => {
//     console.log('click')
// })

let playerTurns = 6


playerCells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if(playerTurns > 0){
            cell.classList.add('active')
            playerTurns--  
        }
        //cell.classList.add('active')
    })
})



