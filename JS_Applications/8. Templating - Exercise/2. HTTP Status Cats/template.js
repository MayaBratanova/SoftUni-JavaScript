$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let template = $('#cat-template').html()
        let templateHTML = Handlebars.compile(template)
        let data = {cats: window.cats}
        let render = templateHTML(data)
        $('#allCats').empty()
        $('#allCats').append(render)
        let btn = $('.btn')
        let currentBtn = ''
        btn.on('click', function () {
             currentBtn = $(this).text()
            if(currentBtn ==='Show status code'){
                $(this).text('Hide status code')
                $(this).next('div').css('display', 'inline-block')
            }
            else{
                $(this).text('Show status code')
                $(this).next('div').css('display', 'none')
            }
        })

    }

})
