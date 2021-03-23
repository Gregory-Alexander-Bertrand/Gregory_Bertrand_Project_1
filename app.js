//console.log('test12321')
const playerCells = Array.from(document.getElementsByClassName('cell-player'));
// const computerCells = Array.from(document.getElementsByClassName('cell'));
let thePlayer = 'player'
let gameOver = false
let totalMoves = 0
let playerMoves = 0
let computerMoves = 0
const whoseRound = document.querySelector('.message-container')
console.log(whoseRound)
// let playerFleet = []
// const ships = ['carrier', 'battleship', 'destroyer', 'cruiser', 'frigate', 'submarine']
const rowA = Array.from(document.getElementsByClassName('row-a'));
console.log(rowA)





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

//This pretty much assigns six random cells to contain a 'ship'
//for(let i =1;  i < 7; i++){
for(let i =0;  i < 6; i++){
    let randomLetters = Math.floor(Math.random() * letters.length)
    //console.log(letters[randomLetters])
    //Above randomizes letters below randomizes numbers
    let randomNumbers = Math.floor(Math.random() * numbers.length)
    //console.log(numbers[randomNumbers])
    //Below combines random letters and random numbers into a new array
    let randomId = letters[randomLetters] + numbers[randomNumbers]
    console.log(randomId)
    //pushes stuff into a new array.
    idLocations.push(randomId)

     document.querySelector(`#${randomId}`).classList.add('hidden')
    //document.querySelector(`#${setAnswers[i]}`).classList.add('hidden')
    
    
}


//This is for finding the hidden ships on the board
//The click will reveal them.
const compCells = document.querySelectorAll('.cell');
const idLocal = document.querySelectorAll(idLocations)
for(let i = 0; i < compCells.length; i++){
    compCells[i].addEventListener('click', function(e) {
        //console.log('click')
        document.getElementById(this.id).classList.add('active');
        // idLocal[i].addEventListener('click', () => {
        //     console.log('click')
        // })
        //     if(this.id === idLocations){
        //         console.log('hit')
        //     } else if(this.id != idLocations){
        //         console.log('miss')
        //     }
    })
}

const squareLocations = document.querySelectorAll('idLocations')
//console.log(idLocations)
for(let j = 0; j < squareLocations.length; j++){
    //console.log(squareLocations)
    if(document.getElementById(this.id).classList('hidden') === squareLocations){
        console.log('hit')
    } else if(document.getElementById(this.id).classList('hidden') != squareLocations){
        console.log('miss')
    }
}
// for(let j = 0; idLocations.length; j++){
//     if(idLocations ===this.id){
//         console.log('hit')
//     } else if(idLocations != this.id){
//         console.log('miss')
//     }
// }

// const gamePlay = (e) => {
//     if(rowA = e.target.id === randomId){
//         rowA.addEventListener('click', (e) => {
//             console.log('hit')
//         })
//     }
// }

// for(let j = 0; j < rowA.length; j++){
//    if(rowA[j].classList('hidden')){
//        console.log('hit')
//    }
// }




    
    // let randomPlayerCells = playerCells[Math.floor(Math.random() * playerCells * (setInterval, 3000))]
    // console.log(randomPlayerCells)


    //let timerId = setInterval(() => console.log('tick'), 2000);

    // setInterval(function () {
    //     let randomPlayerCells = playerCells[Math.floor(Math.random() * playerCells.length)]
    // }, 3000)

    
// for(let j = 0; j < playerCells.length; j++){
//     playerCells[Math.floor(Math.random() * playerCells)]
//     console.log(playerCells)
// }

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


 let randomPlayerCells = playerCells[Math.floor(Math.random() * playerCells.length)]
  console.log(randomPlayerCells)

//  for(let k = 0; k < playerCells.length; k++){
//      let randomPlayerCells = playerCells[Math.floor(Math.random() * playerCells.length)].add.classList('active')
//  }
