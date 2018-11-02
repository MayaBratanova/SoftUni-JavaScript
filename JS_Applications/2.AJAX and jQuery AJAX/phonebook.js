function attachEvents() {
    let person = $('#person')
    let phone = $('#phone')
    let loadBtn = $('#btnLoad')
    let createBtn = $('#btnCreate')
    loadBtn.on('click', loadInfo)
    createBtn.on('click', addInfo)
    function loadInfo() {
        $.ajax({
            method: "GET",
            url: "https://phonebook-nakov.firebaseio.com/phonebook.json"
        }).then(addLiInfo)
    }
    function addInfo() {
        if(person.val()!=='' && phone.val()!==''){
            let data = {
                "person": person.val(),
                "phone": phone.val()
            }
            $.ajax({
                method: "POST",
                url: "https://phonebook-nakov.firebaseio.com/phonebook.json",
                data: JSON.stringify(data)
            }).then(loadInfo)
            person.val('')
            phone.val('')
        }
    }
    function addLiInfo(info) {
        let ul = $('#phonebook')
        ul.empty()
        for (const el in info) {
            let li = $('<li>')
            li.text(`${info[el].person}: ${info[el].phone}`)
            let btnDelete = $('<button>Delete</button>')
            btnDelete.on('click', function () {
                $.ajax({
                    method:"DELETE",
                    url: "https://phonebook-nakov.firebaseio.com/phonebook/" + el + ".json"
                }).then(function () {
                    li.remove()
                })
            })
            li.append(btnDelete)
            ul.append(li)
        }
    }
    
}