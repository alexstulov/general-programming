const hasSurvived = (attackers, defenders) => {
    const fighters = Math.max(attackers.length, defenders.length)
    let survA = 0
    let survD = 0
    for (let i = 0; i < fighters; i++) {
      if (attackers[i] > defenders[i]) {
        survA++
      } else if (attackers[i] < defenders[i]) {
        survD++
      }
    }
    
    if (survA > survD) {
      return false
    } else if (survA < survD) {
      return true
    }

    const powerA = attackers.reduce((prev, cur) => prev+cur,0)
    const powerD = defenders.reduce((prev, cur) => prev+cur,0)
      if (powerD >= powerA) {
        return true
      } else if (powerD < powerA) {
        return false
      }
    return 'something went wrong'
  }

console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8]), false);
console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8]), true);
console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7]), true);
console.log(hasSurvived([], [1, 2, 3]), true);
console.log(hasSurvived([1, 2, 3], []), false);
console.log(hasSurvived([32, 65, 21, 83, 85, 7, 71, 45, 20, 63], [83, 44, 38, 55, 84, 80, 58, 20, 4, 74]), false);
console.log(hasSurvived([69,35,40,81,9,1,75,10,14,25],[34,35,39,69,84,89,22,50,13,48]), false);