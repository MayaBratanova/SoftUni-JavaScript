function attachEvents() {
    const URL = `https://baas.kinvey.com/appdata/kid_H1JLo2BEX/`
    const USERNAME = 'Peter'
    const PASSWORD = 'p'
    const BASE_64 = btoa(USERNAME + ":" + PASSWORD)
    const AUTH = {"Authorization": "Basic " + BASE_64}
    let SELECT = $('#posts')
    let LOADBTN = $('#btnLoadPosts')
    let VIEWBTN = $('#btnViewPost')

    LOADBTN.on('click', function () {
        SELECT.empty()
        $.ajax({
            method: "GET",
            url: URL + "posts",
            headers: AUTH
        }).then(function (info) {
            for (const el in info) {
                let option = $('<option>')
                option.attr('id', `${info[el]._id}`)
                option.attr('body', `${info[el].body}`)
                option.text(info[el].title)
                SELECT.append(option)
            }
        })
    })
    VIEWBTN.on('click', function () {
        let selected = SELECT.find(':selected')
        let id = selected.attr('id')
        let postTitle = $('#post-title')
        postTitle.text(selected.text())
        let postBody = $('#post-body')
        postBody.text(selected.attr('body'))
        $.ajax({
            method:"GET",
            url: URL+`comments/?query={"post_id":"${id}"}`,
            headers: AUTH
        }).then(function (info) {
            // изважда коментарите само на поста с ИД - id console.log(info);
            let comments = $('#post-comments')
            comments.empty()
            for (const infoElement of info) {
                let li = $('<li>')
                li.text(infoElement.text)
                comments.append(li)
            }
        })

    })


}
