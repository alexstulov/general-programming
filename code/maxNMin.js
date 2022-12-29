const prepare = (i, ...rest) => {
    const data =  rest.flat(Infinity)
    if (!data.length) return 0
    if (data.map(a => isNaN(a)).includes(true)) return NaN
    return Number(data.sort((a, b) => i === 'min' ? a - b : b - a)[0])
}

const max = (...rest) => prepare('max', rest)

const min = (...rest) => prepare('min', rest)

console.log(max([[1,[2,['3',-10,[],[]]]]]), 3)
console.log(max([[[[[],[]]]]]), 0)
console.log(max(), 0)
console.log(max(1,2,'qwer'), NaN)

console.log(min(-1000, [1,2,3,[4,-5,[-50000]]]), -50000)
console.log(min([[[]]]), 0)
console.log(min(), 0)
console.log(min(1,2,'asdf'), NaN)