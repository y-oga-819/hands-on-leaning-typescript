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
    }
}

;(async() => {
    const name = await promptInput("名前を入力してください")
    console.log(name)

    const age = await promptInput("年齢を入力してください")
    console.log(age)

    process.exit()

    const hitAndBlow = new HitAndBlow()
    hitAndBlow.setting()
})()