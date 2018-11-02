function tableBuilder(selector) {
    function createTable(arr) {
        $(selector).empty()
        let table = $('<table>')
        let tr = $('<tr>')
        for (const el of arr) {
            let th = $('<th>')
            th.text(el)
            $(tr).append(th)
        }

        let th2 = $('<th>')
        th2.text('Action')
        $(tr).append(th2)
        $(selector).append(table)
        $(table).append(tr)

    }

    function fillData(arrArr) {
        for (const elArr of arrArr) {
            let tr = $('<tr>')
            for (const el of elArr) {
                let td = $('<td>')
                td.text(el)

                tr.append(td)
            }
            let td2 = $('<td><button>Delete</button></td>')
            $(td2).on('click', function () {
                $(this).parent().remove()
            })
            tr.append(td2)
            $('table').append(tr)

        }

    }
    return{
        createTable,
        fillData
    }

}