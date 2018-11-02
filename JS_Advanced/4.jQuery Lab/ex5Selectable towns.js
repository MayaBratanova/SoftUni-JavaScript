function attachEvents() {

    $('#items li').on('click', function () {
        let li = $(this)
        if(li.attr('data-selected')){
            li.removeAttr('data-selected')
            li.css('background', '')
        }
        else{
            $(this).attr('data-selected', 'true')
            $(this).css('background', '#DDD')
        }
    })

    $('#showTownsButton').on('click', function () {
        let data = $('#items li[data-selected=true]')
        let towns = data.toArray().map(li=>li.textContent).join(', ')
        $('#selectedTowns').text("Selected towns: " + towns)

    })
}
