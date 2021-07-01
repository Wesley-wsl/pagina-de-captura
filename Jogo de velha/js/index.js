"use strict";
let squares = document.querySelectorAll('.square')
let $reiniciar = document.querySelector('[data-js="reiniciar"]')

$reiniciar.addEventListener('click', () => {
    location.reload()
})
squares.forEach((square) => {
    square.addEventListener('click', handleClick)
})

function handleClick(event) {
    let square = event.target
    let position = square.id

    if (handleMove(position)) {
        setTimeout(() => {
            alert('O jogo acabou! O vencedor foi ' + playerTime + ` - ${playerTime == 0 ? '(X)' : '(O)'}`)
        }, 10)
    }
    updateSquares(position)
}

function updateSquares(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`

}