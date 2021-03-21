const playerCells = Array.from(document.getElementsByClassName('cell-player'));
const computerCells = Array.from(document.getElementsByClassName('cell'));
document.addEventListener('DOMContentLoaded', () => {
    const playerGrid = document.querySelector('.player-grid');
    const computerGrid = document.querySelector('.computer-grid');

    console.log(playerGrid)
    console.log(computerGrid)

//Source for building and placing random ships on computer grid from this video
// https://www.youtube.com/watch?v=U64vIhh0TyM&t=1109s starting at around 28:00

});
const width = 10
const fleet = [
    {
        name: 'carrier',
        directions: [
            [0, 1, 3, 4],
            [0, width]
        ]
    },
    {
        name: 'destroyer',
        directions: [
            [0, 1 , 2],
            [0, width, width*2]
        ]
    },
    {
        name: 'battleship',
        directions: [
            [0, 1, 2, 3],
            [0, width, width*3]
        ]
    },
    {
        name: 'cruiser',
        directions: [0, 1, 2]
        [0, width, width*2]
    }
]
//trying to get the ships to appear randomly on computer grid
const launchFleet = (fleet) => {
    let randomDirection = Math.floor(Math.random() * fleet.directions.length)
    let current = fleet.directions[randomDirection]
    if(randomDirection === 0) direction = 1
    if(randomDirection === 1) direction =10
    let randomStart = Math.floor(Math.random() * computerCells.length - (fleet.directions[0].length)) 
}
console.log(launchFleet)
console.log(fleet)

computerCells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        cell.classList.add('active')
    })
})

console.log(computerCells)

let randomPlayerCells = playerCells[Math.floor(Math.random() * playerCells.length)].classList.toggle('active')

console.log(randomPlayerCells)