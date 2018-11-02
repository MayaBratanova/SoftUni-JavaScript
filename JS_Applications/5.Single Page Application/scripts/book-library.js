function startApp() {
    sessionStorage.clear()
    showHideMenuLinks()
    showView('viewHome')

    $('#linkHome').on('click', showHomeView)
    $('#linkLogin').on('click', showLoginView)
    $('#linkRegister').on('click', showRegisterView)
    $('#linkListBooks').on('click', listBooks)
    $('#linkCreateBook').on('click', showCreateBookView)
    $('#linkLogout'). on('click', logoutUser)

    $('#formLogin').submit(loginUser)
    $('#formRegister').submit(registerUser)
    $('#formCreateBook').submit(createBook)
    $("#formEditBook").submit(editBook);
    $("form").submit(function(event) { event.preventDefault() });

    $('#infoBox', '#errorBox').on('click', function () {
        $(this).fadeOut()
    })
    $(document).on({
        ajaxStart: function () {
            $('#loadingBox').show()
        },
        ajaxStop:function () {
            $('#loadingBox').hide()
        }
    })
    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_H1SpGwvVQ";
    const kinveyAppSecret = "c3bf2a3d5be041f193f7af9a4e40941f";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret),
    };



    function showView(viewName){
        $('main > section').hide()
        $('#' + viewName).show()
    }
    function showHideMenuLinks() {
        $('#linkHome').show()
        if(sessionStorage.getItem('authToken')===null){
            $('#linkLogin').show()
            $('#linkRegister').show()
            $('#linkLogout').hide()
            $('#linkCreateBook').hide()
            $('#linkListBooks').hide()
        }
        else{
            $('#linkLogin').hide()
            $('#linkRegister').hide()
            $('#linkLogout').show()
            $('#linkCreateBook').show()
            $('#linkListBooks').show()
        }
    }
    function showInfo(message) {
        $('#infoBox').text(message)
        $('#infoBox').show()
        setTimeout(function() {
            $('#infoBox').fadeOut();
        }, 3000);
    }
    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }
    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    function showHomeView() {
        showView('viewHome')
    }
    function showLoginView() {
        showView('viewLogin')
        $('#formLogin').trigger('reset')
    }
    function showRegisterView() {
        showView('viewRegister')
        $('#formRegister').trigger('reset')
    }
    function listBooks() {
        $('#books').empty()
        showView('viewBooks')
        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/books",
            headers: getKinveyUserAuthHeaders()
        }).then(function (res) {
            if(res.length===0){
                $('#viewBooks').text('Empty Book Collection')
            }
            else{
                let table = $('<table>')
                let tr = $('<tr>')
                table.append(tr)
                tr.append('<th>Title</th>').append('<th>Author</th>')
                    .append('<th>Description</th>').append('<th>Actions</th>')
                for (const el of res) {
                    let tr = $('<tr>')
                    table.append(tr)
                    tr.append(`<td>${el.title}</td>`).append(`<td>${el.author}</td>`)
                        .append(`<td>${el.description}</td>`)
                    if(el._acl.creator ===sessionStorage.getItem('userId')){
                        let td = $('<td>')
                        let deleteLink = $('<a href="#">[Delete]</a>')
                            .click(deleteBook.bind(this, el));
                        let editLink = $('<a href="#">[Edit]</a>')
                            .click(loadBookForEdit.bind(this, el));
                        td.append(deleteLink).append(editLink)
                        tr.append(td)
                    }
                }
                $('#books').append(table)
            }
        }).catch(handleAjaxError)
    }
    function loadBookForEdit(book) {
        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "appdata/" +kinveyAppKey + "/books/" + book._id,
            headers: getKinveyUserAuthHeaders(),
        }).then(function (book) {
            $('#formEditBook input[name=id]').val(book._id);
            $('#formEditBook input[name=title]').val(book.title);
            $('#formEditBook input[name=author]').val(book.author);
            $('#formEditBook textarea[name=description]').val(book.description);
            showView('viewEditBook');
        }).catch(handleAjaxError)
    }

    function deleteBook(book) {
        $.ajax({
            method: "DELETE",
            url:kinveyBaseUrl + "appdata/" + kinveyAppKey + "/books/" + book._id,
            headers: getKinveyUserAuthHeaders()
        }).then(function (res) {
            console.log(res);
            listBooks()
            showInfo('Book is deleted')
        })
    }
    function showCreateBookView() {
        showView('viewCreateBook')
        $('#formCreateBook').trigger('reset')
    }
    function logoutUser() {
        sessionStorage.clear()
        $('#loggedInUser').text('')
        showHideMenuLinks()
        showView('viewHome')
        showInfo('Logout Successful')
    }
    function loginUser() {
        let username = $('#formLogin input[name = "username"]').val()
        let password = $('#formLogin input[name = "passwd"]').val()

        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
            data: {username, password},
            headers: kinveyAppAuthHeaders
        }).then(function (res) {
            saveAuthInSession(res)
            showHideMenuLinks()
            listBooks()
            showInfo('User LogIn')
        }).catch(handleAjaxError)
    }
    function saveAuthInSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken
        sessionStorage.setItem('authToken', userAuth)
        let userId = userInfo._id
        sessionStorage.setItem('userId', userId)
        let username = userInfo.username
        $('#loggedInUser').text('Welcome, ' + username + "!")
    }
    function registerUser() {
        let username = $('#formRegister input[name = "username"]').val()
        let password = $('#formRegister input[name = "passwd"]').val()
        $.ajax({
            method:"POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
            headers: kinveyAppAuthHeaders,
            data:{username, password}
        }).then(function (res) {
            saveAuthInSession(res)
            showHideMenuLinks()
            listBooks()
            showInfo('Register User')
        }).catch(handleAjaxError)
    }


    function createBook() {
        let title = $('#formCreateBook input[name="title"]').val()
        let author = $('#formCreateBook input[name="author"]').val()
        let description = $('#formCreateBook textarea[name="description"]').val()
        $.ajax({
            method:"POST",
            url:kinveyBaseUrl + "appdata/" + kinveyAppKey + "/books",
            data:{title, author, description},
            headers:getKinveyUserAuthHeaders()
        }).then(function (res) {
            listBooks()
            showInfo('Create a book')
        }).catch(handleAjaxError)
    }
    function editBook() {
        let title = $('#formEditBook input[name="title"]').val()
        let author = $('#formEditBook input[name="author"]').val()
        let description = $('#formEditBook textarea[name="description"]').val()
        $.ajax({
            method:"PUT",
            url:kinveyBaseUrl + "appdata/" + kinveyAppKey +
            "/books/" + $('#formEditBook input[name=id]').val(),
            data:{title, author, description},
            headers:getKinveyUserAuthHeaders()
        }).then(function (res) {
            listBooks()
            showInfo('Edit a book')
        }).catch(handleAjaxError)
    }
    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }
}
