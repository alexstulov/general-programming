const isOdd = (n) => !!(n % 2)
const isPrime = n => {
    let isP = true
    for (let i = 2; i < n; i++) {
        if (!(n % i)) {
            isP = false
            break
        }
    }
    return isP
}
const isPureOddPrime = (n) => { 
    if (!isPrime(n)) return false
    let isOddN = true
    const arr = n.toString().split('')
    for (let i = 0; i < arr.length; i++) {
        if(!isOdd(Number(arr[i]))) {
            isOddN = false
            break
        }
    }
    return isOddN
}

const onlyOddDigPrimes = (n) => {
    const pureOddPrimes = []
    for (let i = 3; i < n; i+=2) {
        if (isPureOddPrime(i)) {
            pureOddPrimes.push(i)
        }
    }
    let j = 1;
    while (!isPureOddPrime(n+j)) {
        j++
    }
    return [pureOddPrimes.length, pureOddPrimes.pop(), n+j]
}

console.log(onlyOddDigPrimes(20), [7, 19, 31])
console.log(onlyOddDigPrimes(40), [9, 37, 53])
console.log(onlyOddDigPrimes(55), [10, 53, 59])
console.log(onlyOddDigPrimes(60), [11, 59, 71])
console.log(onlyOddDigPrimes(100), [15, 97, 113])
