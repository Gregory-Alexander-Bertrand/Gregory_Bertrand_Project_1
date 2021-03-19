//console.log('test12321')
const gameCells = Array.from(document.getElementsByClassName('cell'));
const firstCell = document.getElementById('A1');
console.log(firstCell)
console.log(gameCells)

firstCell.addEventListener('click', () => {
    console.log('click')
})
