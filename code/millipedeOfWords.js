const shuffleArray = require('../helpers/shuffleArray')

// recursive solution
function solution (words, current = '') {
  console.log(words, current)
  if (!words.length) return true

  for (let i = 0; i < words.length; i++) {
    if (current.length === 0 || current[current.length - 1] === words[i][0]) {
      if (solution(words.slice(0, i).concat(words.slice(i + 1)), current + words[i])) {
        return true
      }
    }
  }
  return false
}


// my randomizer cheat
// const isSorted = data => {
//     if (data.length === 0) return true
//     if (data.length === 1) return true
//     if (data.length === 2) return data[0][data[0].length-1] === data[1][0]
//     for (let i = 1; i < data.length - 1; i++) {
//         const prev = data[i-1]
//         const cur = data[i]
//         const next = data[i+1]
//         if (prev[prev.length-1] !== cur[0] || cur[cur.length-1] !== next[0]) {
//             return false
//         }
//     }
//     return true
// }

// const solution = data => {
//     let temp = [...data]
//     for (let i = 0; i < 10000; i++) {
//         temp = shuffleArray(temp)
//         if (isSorted(temp)) {
//             return true
//         }
//     }
//     return false
// }

console.log(solution([ 'evaluate', 'stereotype', 'excess', 'thesis', 'tablet', 'endure' ]), true)
console.log(solution([ 'triangle', 'entertainment', 'extract', 'east' ]), false)
console.log(solution(["excavate", "endure", "desire", "screen", "theater", "excess", "night"]), true)
console.log(solution(["trade", "pole", "view", "grave", "ladder", "mushroom", "president"]), false)
console.log(solution([ 'trade', 'example', 'endorse', 'evaluate', 'strike' ]), false)
console.log(solution(['screen', 'desire', 'theater', 'excess', 'night']), true)
console.log(solution(["engine", "endure", "elite", "excess"]), true)
console.log(solution(["east", "e", "e", "t", "t", "e", "time"]), true)
console.log(solution(["no", "dog", "on", "good"]), false)
console.log(solution(['a', 'b', 'c', 'd']), false)
console.log(solution([]), true)       
// -------------------------------------------------------------------------------

// const fit = (a, b) => {
//     // console.log('fit', a, b, a[a.length-1] === b[0])
//     return a[a.length-1] === b[0]
// }
// const pushIt = (array, index, item) => {
//     array.splice(index, 0, item)
// }

// const solution = data => {
//     console.log(data)
//     if (!data.length) return false

//     let first = data.shift()

//     let sorted = [first]

//     let temp = [...data]
//     const comparationLimit = temp.length * 3
//     let counter = 0;
//     while (temp.length) {
//         console.log('while', temp)
//         if (counter > comparationLimit) {
//             console.log('limit reached')
//             return false
//         }
//         for (let j = 0; j < sorted.length; j++) {
//             const t = temp.shift()
//             console.log('start second loop', t)
//             if (fit(t, sorted[j]) && !sorted[j-1]) {
//                 console.log('unshift')
//                 sorted.unshift(t)
//                 break;
//             } else if (fit(sorted[j], t) && !sorted[j+1]) {
//                 sorted.push(t)
//                 console.log('pushed')
//                 break;
//             } else if (fit(sorted[j], t) && fit(t,sorted[j+1])) {
//                 console.log(
//                     'sliced',
//                     sorted.splice(j, 0, t)
//                 )
//                 sorted = sorted.splice(j, 0, t)
//                 break;
//             }
//             temp.push(t)
//             console.log('not pushed', temp)
//         }
//         counter++;
//         console.log('end first loop', sorted, sorted.length)
//     }

//     return temp.length === 0
// }

// -------------------------------------------------------------------------

// const countLetters = arr => {
//     return arr.reduce((accum, curr) => {
//         const firstLetterCount = accum[0][curr[0]]
//         const secondLetterCount = accum[1][curr[1]]
//         const obj = {...accum}
//         if (firstLetterCount) {
//             obj[0][curr[0]]++
//         } else {
//             obj[0][curr[0]] = 1
//         }
//         if (secondLetterCount) {
//             obj[1][curr[1]]++
//         } else {
//             obj[1][curr[1]] = 1
//         }
//         return obj
//     }, [{},{}])
// }

// const compareExtreems = obj => {
//     console.log(Object.keys(obj[0]).sort(), Object.keys(obj[1]).sort())
//     // const allLetters = Array.unique([...Object.keys(obj[0]), ... Object.keys(obj[1])])
//     const allLetters = new Set(Object.keys(obj[0]), Object.keys(obj[1]))
//     console.log(obj, [...allLetters.values()])
//     return [...allLetters.values()].reduce((accum, letter) => {
//         const diff = Math.abs((obj[0][letter] || 0) - (obj[1][letter] || 0))
//         if (diff > 2) throw new Error('fail')
//         return accum+diff
//     }, 0)
// }

// const solution = (words) => {
//     const extremeLetters = words.map(word => ([word[0], word[word.length-1]]))
//     const counter = countLetters(extremeLetters)
//     let diff;
//     try {
//         diff = compareExtreems(counter)
//     } catch(error) {
//         return false
//     }
//     if (diff > 2) return false
//     return true
// }
