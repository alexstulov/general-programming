const decode = data => {
    const letters = []
    const onesIndices = []
    data.forEach(msg => {
        if (isNaN(parseInt(msg.value))) {
            for (let i = 0; i < msg.value.length; i++) {
                letters[msg.time+i] = msg.value[i]
            }
            return
        }
        let bin = msg.value
        for (let i = 0; i < bin.length; i++) {
            if (bin[i] === '1') {
                onesIndices.push(msg.time+i)
            }
        }
    })
    return onesIndices
            .sort((a, b) => a - b)
            .map(index => letters[index] ?? '').join('')
}

const data = [
    {
      time: 0,
      value: 'yandex'
    },
    {
      time: 9,
      value: '01111',
    },
    {
      time: 8,
      value: 'adventure', 
    },
    {
      time: 3,
      value: '010',
    },
    {
      time: 22,
      value: '',
    },
    {
      time: 22,
      value: '010',
    }
  ]
console.log(decode(data), 'event')