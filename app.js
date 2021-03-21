//console.log('test12321')
const playerCells = Array.from(document.getElementsByClassName('cell-player'));
const computerCells = Array.from(document.getElementsByClassName('cell'));
//Class constructor to make ships for fleets of computer and player
class Ship {
    constructor(name, length){
        this.name = name;
        this.length = length;
    }
}
//I'm trying to make a class for the player and computer to store the ships
//From the class above
// class Fleets extends Ship {
//     launchFleet(Ship){
//         for(i = 0; i < ships.length; i++) {
//             console.log(ships)
//         }
//     }
// }

class Fleet {
    constructor(detail, size){
        this.detail = [{'name': 'aircraft carrier', 'lenght': 5},
                        {'name': 'battleship', 'length': 4},
                        {'name': 'destroyer', 'length': 3},
                        { 'name': 'cruiser', 'length': 2}];
        this.size = this.detail.length;
    }
}

console.log(Fleet)

let playerFleet = new Fleet()
let computerFleet = new Fleet()
// console.log(playerFleet)
// console.log(computerFleet)
//Objects for ships
let shipOne = new Ship('aircraft carrier', 5);
let shipTwo = new Ship('battleship', 4);
let shipThree = new Ship('destroyer', 3)
let shipFour = new Ship('cruiser', 2)
//Array of ships.
//let ships = [shipOne, shipTwo, shipThree, shipFour]
//  console.log(shipOne)
//  console.log(shipTwo)
//  console.log(shipThree)
//  console.log(shipFour)
 //console.log(ships)


//The player can select any of the squares on the computer's board.
computerCells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        cell.classList.add('active')
    })
})
//The computer picks a random cell on the board to declare as hit.
let randomPlayerCells = playerCells[Math.floor(Math.random() * playerCells.length)].classList.toggle('active')

console.log(randomPlayerCells)


const launchComputerFleet = () => {
    let shipOrientation = Math.floor(Math.random() * Ship.length)
    let currentOrientation = 
}

