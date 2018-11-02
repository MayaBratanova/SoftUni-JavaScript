function startApp() {
    sessionStorage.clear()
    showHideMenuLinks()
    showView('viewName')

    $('#linkHome').on('click', homePage)
    $('#linkLogin').on('click', loginPage)
    $('#linkRegister').on('click', registerPage)
    $('#linkListAds').on('click', listAdsPage)
    $('#linkCreateAd').on('click', createAdsPage)
    $('#linkLogout').on('click', logoutUser)

    $('#buttonLoginUser').on('click', logInUser)
    $('#buttonRegisterUser').on('click', registerUser)
    $('#buttonCreateAd').on('click', createAds)
    $('#buttonEditAd').on('click', editAds)

    const URL = "https://baas.kinvey.com/"
    const kinveyAppKey = "kid_Skf37NPEm"
    const kinveyAppSecret = "fbd0dd68a01c477eae2e8297fad0b053"
    const kinveyHeaders = {
        "Authorization": "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret)
    }

    function showHideMenuLinks() {
        $('#linkHome').show()
        if (sessionStorage.getItem('authToken') === null) {
            $('#linkLogin').show()
            $('#linkRegister').show()
            $('#linkListAds').hide()
            $('#linkCreateAd').hide()
            $('#linkLogout').hide()
        }
        else {
            $('#linkLogin').hide()
            $('#linkRegister').hide()
            $('#linkListAds').show()
            $('#linkCreateAd').show()
            $('#linkLogout').show()
        }
    }

    function showView(viewName) {
        $('main > section').hide()
        $('#' + viewName).show()
    }

    $('#infoBox, #errorBox').on('click', function () {
        $(this).fadeOut()
    })

    $(document).on({
        startajax: function () {
            $('#loadingBox').show()
        },
        endajax: function () {
            $('#loadingBox').hide()
        }
    })

    function showInfo(message) {
        let infoBox = $('#infoBox')
        infoBox.text(message)
        infoBox.show()
        setTimeout(function () {
            $('#infoBox').fadeOut()
        }, 3000)
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    function showError(errorMsg) {
        let errorBox = $('#errorBox')
        errorBox.text('Error: ' + errorMsg + "!")
        errorBox.show()
    }

    function homePage() {
        showView('viewHome')
    }

    function loginPage() {
        showView('viewLogin')
        $('#formLogin').trigger('reset')
    }

    function registerPage() {
        showView('viewRegister')
        $('#formRegister').trigger('reset')
    }

    function listAdsPage() {
        showView('viewAds')
        $('#ads >table').empty()
        $.ajax({
            method: "GET",
            url: URL + "appdata/" + kinveyAppKey + "/advs",
            headers: getKinveyUserAuth()
        }).then(function (res) {
            if(res.length===0){
                $('#ads table').text('No advs in collection!')
            }
            else{
                let tr = $('<tr>')
                tr.append('<th>Title</th>').append('<th>Publisher</th>')
                    .append('<th>Description</th>').append('<th>Price</th>')
                    .append('<th>Date Published</th>').append('<th>Action</th>')
                $('#ads table').append(tr)
                for (const el of res) {
                    let tr1 = $('<tr>')
                    tr1.append(`<td>${el.title}`).append(`<td>${el.publisher}`)
                        .append(`<td>${el.description}`).append(`<td>${el.price}`)
                        .append(`<td>${el.date}`)
                    if(sessionStorage.getItem('userId')===el._acl.creator){

                        let td = $('<td>')
                        let deletBtn = $('<a href="#">[Delete]</a>')
                            .click(deleteAdv.bind(this, el));
                        let editBtn = $('<a href="#">[Edit]</a>')
                            .click(loadAdvForEdit.bind(this, el));
                        td.append(deletBtn).append(editBtn)
                        tr1.append(td)
                    }
                    $('#ads table').append(tr1)
                }
            }
        }).catch(handleAjaxError)
    }
    function deleteAdv(el) {
        $.ajax({
            method:"DELETE",
            url: URL + "appdata/" + kinveyAppKey + "/advs/" + el._id,
            headers: getKinveyUserAuth()
        }).then(function (res) {
            listAdsPage()
            showInfo('The adv is deleted')
        }).catch(handleAjaxError)
    }
    function loadAdvForEdit(el) {
        showView('viewEditAd')
        $.ajax({
            method: "GET",
            url: URL + "appdata/" + kinveyAppKey + "/advs/" + el._id,
            headers: getKinveyUserAuth()
        }).then(function (el) {
            $('#formEditAd input[name="id"]').val(el._id)
            $('#formEditAd input[name="publisher"]').val(el.publisher)
            $('#formEditAd input[name="title"]').val(el.title)
            $('#formEditAd textarea[name="description"]').val(el.description)
            $('#formEditAd input[name = "datePublished"]').val(el.date)
            $('#formEditAd input[name = "price"]').val(el.price)

        }).catch(handleAjaxError)
    }
    function getKinveyUserAuth() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem("authToken")
        }
    }

    function createAdsPage() {
        showView('viewCreateAd')
        $('#formCreateAd').trigger('reset')
    }

    function logoutUser() {
        sessionStorage.clear()
        showHideMenuLinks()
        showView('homeView')
        $('#loggedInUser').text('')
        showInfo('User is logout')
    }

    function logInUser() {
        let username = $('#formLogin input[name="username"]').val()
        let password = $('#formLogin input[name="passwd"]').val()
        $.ajax({
            method: "POST",
            url: URL + "user/" + kinveyAppKey + "/login",
            headers: kinveyHeaders,
            data: {username, password}
        }).then(function (res) {
            saveSessionData(res)
            showHideMenuLinks()
            listAdsPage()
            showInfo('User is logedIn')
        }).catch(handleAjaxError)
    }

    function registerUser() {
        let username = $('#formRegister input[name="username"]').val()
        let password = $('#formRegister input[name="passwd"]').val()
        $.ajax({
            method: "POST",
            url: URL + "user/" + kinveyAppKey + "/",
            headers: kinveyHeaders,
            data: {username, password}
        }).then(function (res) {
            showHideMenuLinks()
            listAdsPage()
            saveSessionData(res)
            showInfo('Registered user!')
        }).catch(handleAjaxError)
    }

    function createAds() {
        let title = $('#formCreateAd input[name="title"]').val()
        let description = $('#formCreateAd textarea[name="description"]').val()
        let date = $('#formCreateAd input[name = "datePublished"]').val()
        let price = Number(Number($('#formCreateAd input[name = "price"]').val()).toFixed(2))
        let publisher = sessionStorage.getItem('userName')
        $.ajax({
            method: "POST",
            url: URL + "appdata/" + kinveyAppKey + "/advs",
            headers: getKinveyUserAuth(),
            data:{title, publisher, description, date, price}
        }).then(function (res) {
            listAdsPage()
            showInfo("The user create a new book")
        }).catch(handleAjaxError)
    }

    function editAds() {
        let title = $('#formEditAd input[name="title"]').val()
        let description = $('#formEditAd textarea[name="description"]').val()
        let date = $('#formEditAd input[name = "datePublished"]').val()
        let price = Number(Number($('#formEditAd input[name = "price"]').val()).toFixed(2))
        let publisher = $('#formEditAd input[name = "publisher"]').val()

        $.ajax({
            method:"PUT",
            url: URL + "appdata/" + kinveyAppKey + "/advs/" + $('#formEditAd input[name=id]').val(),
            headers:getKinveyUserAuth(),
            data:{title, description, publisher, date, price}
        }).then(function (res) {
            listAdsPage()
            showInfo('The book is edited')
        }).catch(handleAjaxError)
    }

    function saveSessionData(data) {
        let userAuth = data._kmd.authtoken
        let userID = data._id
        let userName = data.username
        sessionStorage.setItem('authToken', userAuth)
        sessionStorage.setItem('userId', userID)
        sessionStorage.setItem('userName', userName)
        let logField = $('#loggedInUser')
        logField.text("Hello, " + data.username + "!")
        logField.show()
    }
}