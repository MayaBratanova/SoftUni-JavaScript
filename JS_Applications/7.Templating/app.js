(async () => {
    let data = await $.get('./data.json')
    let finalData = {contacts: data}
    let template = await $.get('./templates/contact.hbs')
    let templateHTML = Handlebars.compile(template)
    let render = templateHTML(finalData)
    $('#list div[class="content"]').append(render)

    let personalContactTeplate = await $.get('./templates/partials/personalContacts.hbs')
    Handlebars.registerPartial('personalContacts', personalContactTeplate)
    let details = await  $.get('./templates/details.hbs')
    let detailsHTML = Handlebars.compile(details)
    let currentDiv = ''
    $('.contact').on('click', function () {
        currentDiv = $(this)
        let id = currentDiv.attr('data-id')
        $('#details div[class="content"]').empty()
        $('#details div[class="content"]').append(detailsHTML(data[id]))
    })



})();