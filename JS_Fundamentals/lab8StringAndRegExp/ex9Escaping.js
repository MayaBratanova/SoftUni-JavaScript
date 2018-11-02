function escaping(arr) {
    let text = "<ul>\n"
    for (const elements of arr)
     {
         text+="   <li>"
        text+=htmlEscape(elements)
        text+="</li>\n"
     }
    function htmlEscape(arr1) {
        return arr1.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/'/g,'&#39;').replace(/"/g,'&quot;')

    }

    text+="</ul>"
    console.log(text);
}
escaping(['<b>unescaped text</b>', 'normal text'])