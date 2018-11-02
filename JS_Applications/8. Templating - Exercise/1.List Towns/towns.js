function attachEvents(){
    let namesTown = []
    $('#btnLoadTowns').on('click', function () {
        namesTown = []
        let value = $('#towns')
        if(value.val()!==''){
            let result = value.val().split(', ')
            for (const el of result) {
                namesTown.push({town: el})
            }
        }
        let lastData = {towns: namesTown}
        console.log(lastData);
        renderTowns(lastData)
    })


    function renderTowns(lastData) {
        $('#towns').val('')
        let template = $('#towns-template').html()
        let compiled= Handlebars.compile(template)
        let rendered = compiled(lastData)
        $('#root').empty()
        $('#root').append(rendered)
    }

}