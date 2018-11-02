function attachEvents() {
    let towns = $('#towns option')
    $('#btnDelete').on('click', function () {
        let textTown = $('#townName')
        let istrue = false
        let deleteText;
        let deleteName;
        let resultDiv = $('#result')
        for (const el of towns) {
            if (textTown.val() === '') {
                continue
            }
            if ($(el).text()===($(textTown).val())) {
                istrue = true
                deleteText = $(el)
                deleteName = deleteText.val()
                $(deleteText).remove()

            }
            else {
                deleteName = textTown.val()

            }

        }
        if(istrue){

            resultDiv.text(`${deleteName} deleted.`)
        }
        else{
            resultDiv.text(`${deleteName} not found.`)
        }

        $(textTown).val('')
    })
}