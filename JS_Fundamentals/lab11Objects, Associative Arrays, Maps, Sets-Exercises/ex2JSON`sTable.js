function jsonTable(arr) {
    let answer = '<table>\n'
    for (let i = 0; i < arr.length; i++) {
        let sentence = JSON.parse(arrEl)
        console.log(sentence);
        let arrData = Object.values(sentence)
        answer+='   <tr>\n'
        answer+=`		<td>${arrData[0]}</td>\n`
        answer+=`       <td>${arrData[1]}</td>\n`
        answer+=`       <td>${arrData[2]}</td>\n`
        answer+='  <tr>\n'

    }
    answer+='</table>'
    console.log(answer);
}
jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'])
//<table>
// 	<tr>
// 		<td>Pesho</td>
// 		<td>Promenliva</td>
// 		<td>100000</td>
// 	<tr>
// 	<tr>
// 		<td>Teo</td>
// 		<td>Lecturer</td>
// 		<td>1000</td>
// 	<tr>
// 	<tr>
// 		<td>Georgi</td>
// 		<td>Lecturer</td>
// 		<td>1000</td>
// 	<tr>
// </table>