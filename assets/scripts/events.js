// push the click events into the gamearray
const gameMoves = [null, null, null, null, null, null, null, null, null]

const checkWinner = function () {
  if (gameMoves[0] === 'X' && gameMoves[1] === 'X' && gameMoves[2] === 'X') {
    console.log('winner')
  } else {
    console.log('nope')
  }
}

let turn = 0
const game = function (event) {
  if ($(event.target).text('')) {
    if (turn % 2 === 1) {
      $(event.target).text('O')
      turn += 1
    } else {
      $(event.target).text('X')
      turn += 1
    }
  } else {
    console.log('pick another cell')
  }
  gameMoves[$(this).data('id')] = $(this).text()
  console.log(gameMoves)

  checkWinner()
}

module.exports = {
  game,
  turn,
  gameMoves,
  checkWinner
}
