// source of this implementation with interesting visualization
// http://beso9595.github.io/eight-queens-puzzle-backtracking/

const boardSize = 8
const board = [...Array(boardSize)].map(_ => Array(boardSize).fill(0))
const result = []

// compares two positions if they share same row, column or diagonal
function compare (x1, y1, x2, y2) {
  return !(x1 === x2 || y1 === y2 || (Math.abs(x2 - x1) === Math.abs(y2 - y1)))
}

// gets the array of positions of all queens on the board
function getQueens () {
  const queensList = []
  let queenPos
  let found
  for (let i = 0; i < board.length; i++) {
    queenPos = createQueen(-1, -1)
    found = false
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j]) {
        queenPos.row = i
        queenPos.col = j
        found = true
        break
      }
    }
    if (found) {
      queensList.push(queenPos)
    }
  }
  return queensList
}

// creates object of queen
function createQueen (rowInd, colInd) {
  return { row: rowInd, col: colInd }
}

// check given board position for every queen on the board
function check (rowInd, colInd) {
  const queensList = getQueens()
  for (let i = 0; i < queensList.length; i++) {
    if (!compare(queensList[i].row, queensList[i].col, rowInd, colInd)) {
      return false
    }
  }
  return true
}

// main function of calculation results with recursion
function backtracking (rowInd) {
  if (rowInd === board.length) {
    return true
  }
  for (let i = 0; i < board.length; i++) {
    if (check(rowInd, i)) {
      board[rowInd][i] = 1
      if (backtracking(rowInd + 1)) {
        board.map(r => result.push([...r]))
        return false
      }
      board[rowInd][i] = 0
    }
  }
  return false
}

backtracking(0)
console.table(result)
