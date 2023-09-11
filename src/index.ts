const printLine = (text: string, breakLine: boolean = true) => {
    process.stdout.write(text + (breakLine ? '\n' : ''))
}

const promptInput = async (text: string) => {
    printLine('\n' + text + '\n>', false)
    const input: string = await new Promise(
        (resolve) => process.stdin.once(
            'data', (data) => resolve(data.toString())
        )
    )
    return input.trim()
}

class HitAndBlow {
    answerSource = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    answer: string[] = []
    tryCount = 0

    setting() {
        const answerLength = 3

        while(this.answer.length < answerLength) {
            const randNum = Math.floor(Math.random() * this.answerSource.length)
            const selectedItem = this.answerSource[randNum]
            if (!this.answer.includes(selectedItem)) {
                this.answer.push(selectedItem)
            }
        }
    }

    async play() {
        const inputArr = (await promptInput('「,」区切りで3つの数字を入寮してください')).split(',')
        const result = this.check(inputArr)
    }

    check(inputArr: string[]) {
        let hitCount = 0
        let blowCount = 0

        inputArr.forEach((val, index) => {
            if (val === this.answer[index]) {
                hitCount++
            } else if (this.answer.includes(val)) {
                blowCount++
            }
        })

        return {
            hitCount,
            blowCount,
        }
    }
}

;(async() => {
    const hitAndBlow = new HitAndBlow()
    hitAndBlow.setting()
    hitAndBlow.play()
})()