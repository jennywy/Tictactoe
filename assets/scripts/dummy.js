
// let gameMoves = [null, null, null, null, null, null, null, null, null]

let gameMoves = [0,1,2,3,4,5,6,7,8]
let playerXMoves = []
let playerOMoves = []

let playerArray = function (gameMoves) {
  for (let i = 0; i < gameMoves.length; i++) {
  if (gameMoves[i] % 2 === 1) {
    playerOMoves.push(gameMoves[i])
  } else {
    playerXMoves.push(gameMoves[i])
  }
}
}
playerArray(gameMoves)
console.log(playerXMoves)
console.log(playerOMoves)

// if the playerMoves array is larger than 3, check for a match
// if some of the numbers match all any of the matchid elements...
const match = [0, 1, 2]
const user = [0, 2, 1, 4]
const bad = [3, 1, 2]
const wrong = bad.sort()
const sorted = user.sort()
const check = function (sortedset) {
  for (let i = 0; i < match.length; i++) {
    if (match[i] === sortedset[i]) {
      return true
} else {
  return false
}
}
}
check(sorted)
check(wrong)

// if some of b === match

const matchIds = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

const checkForMatch = function (playerMoves) {
  if (playerMoves.length >= 3) {
    //go through each item of the matchIds to check if
for
  }
}


// adding player moves into their array

let game = function (player, index) {
  let playerX
  let playerO
}


// create an incrimenter
// if we click nine times and there is no match, then it's a tie and the game ends
// every even click is O, every odd click is X

const checkForMatch = function () {}
// check if the clicks match any of the set of matchIds
