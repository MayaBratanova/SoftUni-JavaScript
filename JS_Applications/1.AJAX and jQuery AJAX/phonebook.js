const PHONEBOOK = 'https://phonebook-3d20a.firebaseio.com/phonebook'
const PERSON = $('#person')
const TELEPHONE = $('#phone')
const TABLE = $('#phonebook')
let load = $('#btnLoad')
load.on('click', function () {
    $.ajax({
        method:"GET",
        url: PHONEBOOK + '.json'
    }).then(appendContact)
        .catch(printError)
})
let create = $('#btnCreate')
create.on('click', function () {
    let person = PERSON.val()
    let telephone = TELEPHONE.val()
    if (person !== '' && telephone !== '') {
        $.ajax({
            method: "POST",
            url: PHONEBOOK + '.json',
            data: JSON.stringify({person, telephone})
        }).then(function () {
            PERSON.val('')
            TELEPHONE.val('')
        }).catch(printError)
    }
})
function appendContact(results) {
    TABLE.empty()
    for (const el in results) {
        let person = results[el]['person']
        let phone = results[el]['telephone']
        let li = $('<li>')
        li.text(person + ': ' + phone)
        let btnDelete = $('<button>DELETE</button>')
        btnDelete.on('click', function () {
            $.ajax({
                method:"DELETE",
                url: PHONEBOOK + '/' + el + '.json',
            }).then(function () {
                li.remove()
            }).catch(printError)
        })
        li.append(btnDelete)
        TABLE.append(li)

    }
}
function printError(err) {
    console.log(err);
}
