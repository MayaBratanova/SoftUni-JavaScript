function convertToTable(str) {
    let arr = JSON.parse(str)
    let answer = "<table>\n"
    let keys = Object.keys(arr[0])
    answer += "   <tr>"
    for (let i = 0; i < keys.length; i++) {
        answer+=`<th>${replacing(keys[i] + '')}</th>`
    }
    answer += `</tr>\n`
    for (const obj of arr) {
        answer+='   <tr>'
        for (let i = 0; i < keys.length; i++) {
            answer+=`<td>${replacing(obj[keys[i]]+'')}</td>`
        }
        answer+='</tr>\n'
    }
    answer += "</table>"
    console.log(answer);
    function replacing(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/>/g,'&gt;')
            .replace(/</g,'&lt;')
            .replace(/'/g,'&#39;')
            .replace(/"/g,'&quot;')
    }
}
convertToTable('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},' +
    '{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'
)
//<table>
//    <tr><th>Name</th><th>Age</th><th>City</th></tr>
//    <tr><td>Pesho &lt;div&gt;-a</td><td>20</td><td>Sofia</td></tr>
//    <tr><td>Gosho</td><td>18</td><td>Plovdiv</td></tr>
//    <tr><td>Angel</td><td>18</td><td>Veliko Tarnovo</td></tr>
// </table>