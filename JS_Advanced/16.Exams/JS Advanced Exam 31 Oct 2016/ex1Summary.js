function summary(button) {
    $(button).on('click', function () {
        let strongText = $('#content strong').text()
        //console.log(typeof strongText);
        let newDiv = $('<div id="summary">')
        let h2 = $('<h2>Summary</h2>')
        let p = $('<p>')
        p.text(strongText)
        newDiv.append(h2)
        newDiv.append(p)
        let parent = $('#content').parent()
        parent.append(newDiv)
    })
}

