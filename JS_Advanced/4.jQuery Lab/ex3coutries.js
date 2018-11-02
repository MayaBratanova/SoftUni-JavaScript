function initializeTable() {


    $('#createLink').on('click', createCountry)
    addCountryToTable('Bulgaria', 'Sofia')
    addCountryToTable('Germany', 'Berlin')
    addCountryToTable('Russia', 'Moscow')
    hideButtons()

    function addCountryToTable(country, capital) {

        let tableRow = $('<tr>')
            .append(`<td>${country}</td>`)
            .append(`<td>${capital}</td>`)
            .append($('<td>')
                .append($('<a href="#">[Up]</a>').click(moveUp))
                .append($('<a href="#">[Down]</a>').click(moveDown))
                .append($('<a href="#">[Delete]</a>').click(moveDelete))
            )
        $('#countriesTable').append(tableRow)
    }

    function createCountry() {
        let country = $('#newCountryText')
        let capital = $('#newCapitalText')
        addCountryToTable(country.val(), capital.val())
        country.val('')
        capital.val('')
        hideButtons()
    }

    function moveUp() {
        let row = $(this).parent().parent()
        row.insertBefore(row.prev())
        hideButtons()
    }

    function moveDown() {
        let row = $(this).parent().parent()
        row.insertAfter(row.next())
        hideButtons()
    }

    function moveDelete() {
        $(this).parent().parent().remove()
        hideButtons()
    }

    function hideButtons() {
        $('#countriesTable a').css('display', '')
        $('#countriesTable tr:eq(2) a:contains("Up")').css('display', 'none')
        $('#countriesTable tr:last a:contains("Down")').css('display', 'none')
    }


}