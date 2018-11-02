function sort(colIndex, descending) {
    let text = $('tbody > tr')

    if (colIndex === 0 && !descending) {
        //ascending by name
        text.sort((a, b) => $($(a).children()[0]).text().localeCompare($($(b).children()[0]).text()))
    }
    else if (colIndex === 0 && descending) {
        text.sort((a,b)=> $($(b).children()[0]).text().localeCompare($($(a).children()[0]).text()))
    }
    if (colIndex === 1 && !descending) {
        text.sort((a,b)=>$($(a).children()[1]).text().localeCompare($($(b).children()[1]).text()))
    }
    else if (colIndex === 1 && descending) {
        text.sort((a,b)=>$($(b).children()[1]).text().localeCompare($($(a).children()[1]).text()))
    }
    $('tbody').html(text)


}