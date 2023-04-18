function test(quantums, n) {
    const transferQuantums = async (quantums, n) => {
        if (!n || !quantums.length) {
            return []
        }
        const sortedQs = quantums.sort((a,b) => a.priority - b.priority)
        const result = []
        let finished = true
        do {
            if (!finished) {
                continue
            }
            const bunch = []
            for (let i = 0; i < Math.min(sortedQs.length, n); i++) {
                bunch.push(sortedQs.pop().transfer())
            }
            await Promise.all(bunch).then(async quants => {
                await result.push(...quants.flat(2).filter(quant => quant))
            }).finally(() => finished = true)
        } while(sortedQs.length)

        return result
    }
    
return transferQuantums(quantums, n)
}

console.log(test([
    {
        id: 'a',
        priority: 1,
        transfer: () => new Promise(resolve => resolve('a'))
    },
    {
        id: 'b',
        priority: 1,
        transfer: () => new Promise(resolve => resolve(null))
    },
    {
        id: 'c',
        priority: 2,
        transfer: () => new Promise(resolve => resolve(['d', 'e']))
    },
], 2), 'ok?')