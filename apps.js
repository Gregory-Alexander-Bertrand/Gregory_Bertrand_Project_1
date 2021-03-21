const playerCells = Array.from(document.getElementsByClassName('cell-player'));
const computerCells = Array.from(document.getElementsByClassName('cell'));
const rowA = Array.from(document.getElementsByClassName('row-a'));
const rowB = Array.from(document.getElementsByClassName('row-b'));
const rowC = Array.from(document.getElementsByClassName('row-c'));
const rowD = Array.from(document.getElementsByClassName('row-d'));
const rowE = Array.from(document.getElementsByClassName('row-e'));
const rowF = Array.from(document.getElementsByClassName('row-f'));
const rowG = Array.from(document.getElementsByClassName('row-G'));
const rowH = Array.from(document.getElementsByClassName('row-h'));
const rowI = Array.from(document.getElementsByClassName('row-i'));
const rowJ = Array.from(document.getElementsByClassName('row-j'));
const colOne = Array.from(document.getElementsByClassName('col-1'))
const colTwo = Array.from(document.getElementsByClassName('col-2'))
const colThree = Array.from(document.getElementsByClassName('col-3'))
const colFour = Array.from(document.getElementsByClassName('col-4'))
const colFive = Array.from(document.getElementsByClassName('col-5'))
const colSix = Array.from(document.getElementsByClassName('col-6'))
const colSeven = Array.from(document.getElementsByClassName('col-7'))
const colEight = Array.from(document.getElementsByClassName('col-8'))
const colNine = Array.from(document.getElementsByClassName('col-9'))
const colTen = Array.from(document.getElementsByClassName('col-10'))

//Event Listeners to grab each square in a row to make it playable
//by either the computer or player once the ships are placed.
rowA.forEach((row, index) => {
    row.addEventListener('click', () => {
        console.log('click')
    })
})
rowB.forEach((row, index) => {
    row.addEventListener('click', () => {
        console.log('click')
    })
})
rowC.forEach((row, index) => {
    row.addEventListener('click', () => {
        console.log('click')
    })
})
rowD.forEach((row, index) => {
    row.addEventListener('click', () => {
        console.log('click')
    })
})
rowE.forEach((row, index) => {
    row.addEventListener('click', () => {
        console.log('click')
    })
})
rowF.forEach((row, index) => {
    row.addEventListener('click', () => {
        console.log('click')
    })
})
rowG.forEach((row, index) => {
    row.addEventListener('click', () => {
        console.log('click')
    })
})
rowH.forEach((row, index) => {
    row.addEventListener('click', () => {
        console.log('click')
    })
})
rowI.forEach((row, index) => {
    row.addEventListener('click', () => {
        console.log('click')
    })
})
rowJ.forEach((row, index) => {
    row.addEventListener('click', () => {
        console.log('click')
    })
})

//Objects for the ships that will make up a fleet.

let navalFleet = [
    {
        'name': 'carrier',
        'position': [B4, C4, D4, E4, F4],
        'strikes': ['', '', '', '', '']
    },
    {
        'name': 'battleship',
        'position': [A1, A2, A3, A4],
        'strikes': ['', '', '', '']
    },
    {
        'name': 'destroyer',
        'position': [B2, C2, D2],
        'strikes': ['', '', '']
    },
    {
        'name': 'cruiser',
        'position': [D5, E5],
        'strikes': ['', '']
    }
]
//console.log(navalFleet)
//Trying to find a way to randomly place the array of objects I created into the DOM
const launchFleet = (navalFleet) => {
    let directions = Math.floor(Math.random() * 2)
    let row
    let col
    if(directions ===1){
        row = Math.floor(Math.random() * this.computerCells)
        col = Math.floor(Math.random() * this.computerCells - this.navalFleet.position)
    } else {
        row = Math.floor(Math.random() * this.computerCells - this.navalFleet.position)
        col = Math.floor(Math.random() * this.computerCells)
    }
}

console.log(navalFleet)

