function startApp() {
    sessionStorage.clear()
    showHideMenuLinks()
    showView('view')
    let goodMap = new Map()

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_HJTPwYbHX";
    const kinveyAppSecret = "0ed207ce74b944e2b0839e9a5b31f1bd";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret),
    };

    function getKinveyUserAuthorisaion() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        }
    }

    $('#linkMenuAppHome').on('click', homeView)
    $('#linkMenuLogin').on('click', loginView)
    $('#linkMenuRegister').on('click', registerView)
    $('#linkMenuUserHome').on('click', homeUserView)
    $('#linkMenuShop').on('click', menuShop)
    $('#linkMenuCart').on('click', menuCart)
    $('#linkMenuLogout').on('click', logoutUser)

    $('#formLogin').submit(loginUser)
    $('#formRegister').submit(registerUser)
    $('#linkUserHomeShop').on('click', menuShop)
    $('#linkUserHomeCart').on('click', menuCart)
    $("form").submit(function (event) {
        event.preventDefault()
    });

    function showHideMenuLinks() {
        if (sessionStorage.getItem('authToken') === null) {
            $('.anonymous').show()
            $('.useronly').hide()
        }
        else {
            $('.anonymous').hide()
            $('.useronly').show()
        }
    }

    function showView(view) {
        $('main > section').hide()
        $('#' + view).show()
    }

    $(document).on({
        ajaxStart: function () {
            $('#loadingBox').show()
        },
        ajaxStop: function () {
            $('#loadingBox').hide()
        }
    })
    $('#infoBox', '#errorBox').on('click', function () {
        $(this).fadeOut()
    })

    function showMessage(message) {
        $('#infoBox').show()
        $('#infoBox > span').text(message)
        setTimeout(function () {
            $('#infoBox').fadeOut()
        }, 3000)
    }

    function showError(error) {
        $('#errorBox').show()
        $('#errorBox > span').text(error)
        $('#errorBox').on('click', function () {
            $(this).fadeOut()
        })
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    function homeView() {
        showView('viewAppHome')
    }

    function loginView() {
        showView('viewLogin')
        $('#formLogin').trigger('reset')
    }

    function registerView() {
        showView('viewRegister')
        $('#formRegister').trigger('reset')
    }

    function homeUserView() {
        showView('viewUserHome')
        $('#viewUserHomeHeading').text(`Welcome, ${sessionStorage.getItem('username')}!`)

    }

    function menuShop() {
        showView('viewShop')
        $('#shopProducts tbody').empty()
        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/products",
            headers: getKinveyUserAuthorisaion()
        }).then(function (resp) {
            if (resp.length > 0) {
                for (const res of resp) {
                    let price = res.price.toFixed(2)
                    let btn = $('<button>Purchase</button>').click(purchaseGood.bind(this, res))
                    let tr = $('<tr>')
                    tr.append(`$<td>${res.name}</td>`)
                        .append(`$<td>${res.description}</td>`)
                        .append(`$<td>${price}</td>`)
                        .append($('<td>').append(btn))
                    $('#shopProducts tbody').append(tr)
                }
            }
        }).catch(handleAjaxError)
    }

    function purchaseGood(goodInfo) {
        showMessage('Product purchased.')
        let id = goodInfo._id
        let name = goodInfo.name
        let description = goodInfo.description
        let price = goodInfo.price
        if (!goodMap.has(id)) {
            goodMap.set(id, {
                    quantity: 1,
                    product: {
                        name: name,
                        description: description,
                        price: price
                    }
                }
            )
            menuCart()
        }
        else {
            let currentQuantity = goodMap.get(id).quantity
            let newQuantity = currentQuantity + 1
            goodMap.set(id,{
                quantity: newQuantity,
                product: {
                    name: name,
                    description: description,
                    price: price
                }
            })
            menuCart()
        }
    }

    function menuCart() {
        showView('viewCart')
        $('#cartProducts tbody').empty()
        for (const el of goodMap) {
            let id = el[0]
            let name = el[1].product.name
            let description = el[1].product.description
            let quantity = el[1].quantity
            let price = el[1].product.price
            let totalPrice = (quantity*price).toFixed(2)
            let discard = $('<button>Discard</button>').click(discardProduct.bind(this, el))
            let tr = $('<tr>')
            tr.append(`$<td name=${name}>${name}</td>`)
                .append(`$<td>${description}</td>`)
                .append(`$<td>${quantity}</td>`)
                .append(`$<td>${totalPrice}</td>`)
                .append($('<td>').append(discard))
            $('#cartProducts tbody').append(tr)
        }
    }
    function discardProduct(el) {
        let currentId = el[0]
        let name = el[1].product.name
        let idName = name.split(' ')[0]
        $(`td[name=${idName}]`).parent().remove()
        for (const goodEl of goodMap) {
            if(goodEl[0] === currentId){
                goodMap.delete(goodEl[0])
            }
        }
    }

    function logoutUser() {
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + 'user/' + kinveyAppKey + "/_logout",
            headers: getKinveyUserAuthorisaion()
        }).then(() => {
            sessionStorage.clear()
            showMessage('Logout successful.')
            homeView()
            showHideMenuLinks()
            goodMap.clear()
        }).catch(handleAjaxError)
    }

    function loginUser() {
        let username = $('#loginUsername').val()
        let password = $('#loginPasswd').val()
        $.ajax({
            method: "POST",
            headers: kinveyAppAuthHeaders,
            data: {username, password},
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login"
        }).then(function (res) {
            saveInfoSessionStorage(res)
            showHideMenuLinks()
            showMessage('Login successful.')
            homeUserView()
        }).catch(handleAjaxError)
    }

    function registerUser() {
        let username = $('#registerUsername').val()
        let password = $('#registerPasswd').val()
        let name = $('#registerName').val()
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
            data: {username, password, name},
            headers: kinveyAppAuthHeaders
        }).then(function (res) {
            saveInfoSessionStorage(res)
            showHideMenuLinks()
            showMessage('User registration successful.')
            homeUserView()
        }).catch(handleAjaxError)
    }

    function saveInfoSessionStorage(response) {
        sessionStorage.setItem('username', response.username)
        sessionStorage.setItem('name', response.name)
        sessionStorage.setItem('userid', response._id)
        sessionStorage.setItem('date', response._kmd.lmt)
        sessionStorage.setItem('authToken', response._kmd.authtoken)
        $('#spanMenuLoggedInUser').text(`Welcome, ${sessionStorage.getItem('username')}!`)
    }
}