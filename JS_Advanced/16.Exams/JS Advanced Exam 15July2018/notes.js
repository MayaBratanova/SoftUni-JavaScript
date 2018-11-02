function addSticker() {
    let inputTitle = $('.title')
    let inputText = $('.content')
    let btnAdd = $('#add-sticker')
    let ul = ('#sticker-list')

    if (inputTitle.val()!=='' && inputText.val()!=='') {
        let li = $('<li>').addClass('note-content')
        let a = $('<a>').addClass('button').text('x')
        a.on('click', function () {
            let note = $('.note-content')
            note.remove()
        })
        let h2 = $('<h2>').text(inputTitle.val())
        let hr = $('<hr>')
        let p = $('<p>').text(inputText.val())


        $('ul').append(li)
        li.append(a).append(h2).append(hr).append(p)
        inputTitle.val('')
        inputText.val('')

    }


}

