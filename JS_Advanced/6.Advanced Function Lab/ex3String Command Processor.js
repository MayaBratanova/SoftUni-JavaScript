function solve(arr) {
    let commandProcessor = (function () {
        let text = ''
        return{
            append: (newText)=>text = text+newText,
            removeStart:(count)=>text = text.slice(count),
            removeEnd:(count) => text = text.slice(0, text.length-count),
            print:()=>console.log(text)

        }
    })()
    for (const arrEl of arr) {
        let input = arrEl.split(' ')
        let command = input[0]
        let arg = input[1]
        commandProcessor[command](arg)
    }
}
solve(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
)