function scoreToHTML(arr) {
    let input = JSON.parse(arr)
    let answer = '<table>\n'
    answer+="    <tr><th>name</th><th>score</th></tr>\n"
    for (const obj of input) {
        answer+=`    <tr><td>${replacing(obj['name']+'')}</td><td>${replacing(obj['score']+'')}</td></tr>\n`
    }
    answer+="</table>"
    console.log(answer);
function replacing(str) {
    return str.replace(/&/g, '&amp;')
        .replace(/>/g,'&gt;')
        .replace(/</g,'&lt;')
        .replace(/'/g,'&#39;')
        .replace(/"/g,'&quot;')
}
}
scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]'
)