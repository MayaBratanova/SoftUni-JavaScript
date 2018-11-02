function appStart() {
    sessionStorage.clear()
    showHideMenuLinks()
    showView('view')

    $('#linkMenuAppHome').on('click', loadHomeViewCatalogue)
    $('#linkMenuFlights').on('click', loadMyFlights)
    $('#linkMenuLogin').on('click', showLoginView)
    $('#linkMenuRegister').on('click', showRegisterView)
    $('#linkMenuLogout').on('click', logoutUser)
    $('.add-flight').on('click', addFlightView)
    //$('.added-flights').on('click', flightView)
    // $('#linkMenuArchiveSent').on('click', menuArchiveSent)
    // $('#linkMenuSendMessage').on('click', menuSendMessage)

    //
    $('#formLogin').submit(loginUser)
    $('#formRegister').submit(registerUser)
    $('#formAddFlight').submit(addFlight)
    $('#formEditFlight').submit(saveEditedFlight)
    $("form").submit(function (event) {
        event.preventDefault()
    });
    $('.add-flight').on('click', function (event) {
        event.preventDefault()
    })


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

    function showInfo(message) {
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
    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_SJJ3n0C4X";
    const kinveyAppSecret = "76a97b99664341e08ac03f81b2966952";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret),
    };


    function showView(viewName) {
        $('#container > section').hide()
        $('#' + viewName).show()
    }

    function showHideMenuLinks() {
        if (sessionStorage.getItem('authToken') === null) {
            $('#linkMenuLogin').show()
            $('#linkMenuRegister').show()
            $('#linkMenuAppHome').hide()
            $('#linkMenuFlights').hide()
            $('.right-container').hide()
        }
        else {
            $('#linkMenuLogin').hide()
            $('#linkMenuRegister').hide()
            $('#linkMenuAppHome').show()
            $('#linkMenuFlights').show()
            $('.right-container').show()
            let userName = sessionStorage.getItem('userName')
            $('.right-container span').text(`Welcome, ${userName}`)
        }
    }

    function saveAuthInSession(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken)
        sessionStorage.setItem('userId', userInfo._id)
        sessionStorage.setItem('userName', userInfo.username)
        // let username = userInfo.username
        // $('#spanMenuLoggedInUser').show()
        // $('#spanMenuLoggedInUser').text('Welcome, ' + username + "!")
    }
    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }
    function showLoginView() {
        showView('viewLogin')
        $('#formLogin').trigger('reset')
    }

    function showRegisterView() {
        showView('viewRegister')
        $('#formRegister').trigger('reset')
    }
    function loadHomeViewCatalogue() {
        showView('viewCatalog')
        $('.added-flights').empty()
        $.ajax({
            method:"GET",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/flights?query={\"publicOn\":\"true\"}",
            headers:getKinveyUserAuthHeaders()
        }).then(function (resp) {
            for (const res of resp) {
                let a = $('<a href="#" class="added-flight">').click(flightView.bind(this, res))
                let img = $(`<img src="${res.url}" alt="" class="picture-added-flight">`)
                let h3 = $('<h3>').text(res.destination)
                let span = $('<span>').text(`from ${res.origin}`)
                let span1 = $('<span1>').text(res.departure)
                $('.added-flights').append(a)
                $(a).append(img).append(h3).append(span).append(span1)
            }
        }).catch(handleAjaxError)
    }
    function addFlightView() {
        showView('viewAddFlight')
        $('#formAddFlight').trigger('reset')
    }
    function addFlight() {
        let destination = $('#formAddFlight input[name=destination]').val()
        let origin = $('#formAddFlight input[name=origin]').val()
        let departure = $('#formAddFlight input[name=departureDate]').val()
        let departure_time = $('#formAddFlight input[name=departureTime]').val()
        let seats = Number($('#formAddFlight input[name=seats]').val())
        let cost = Number($('#formAddFlight input[name=cost]').val())
        let url = $('#formAddFlight input[name=img]').val()
        let publicOn = $('#formAddFlight input[name=public]').is(':checked')

        $.ajax({
            method:"POST",
            data:{departure_time, publicOn, url, cost, seats, departure, origin, destination},
            headers: getKinveyUserAuthHeaders(),
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/flights"
        }).then(function (res) {
            showHideMenuLinks()
            loadHomeViewCatalogue()
            showInfo('Created flight.')
        }).catch(handleAjaxError)
    }
    function flightView(res) {
        showView('viewFlightDetails')
        $('.ticket-area-left').empty()
        $('.ticket-area-right').empty()
        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "appdata/" +kinveyAppKey + "/flights/" + res._id,
            headers: getKinveyUserAuthHeaders(),
        }).then(function (el) {

            let img = $(`<img src="${el.url}" alt="">`)
            $('.ticket-area-left').append(img)
            let div = $('.ticket-area-right')
            $('.ticket-area').append(div)
            let h3 = $('<h3>').text(el.destination)
            let div1 = $('<div>').text(`from ${el.origin}`)
            let div2 = $('<div class="data-and-time">').text(el.departure +' '+ el.departure_time)
            if(sessionStorage.getItem('userId')===el._acl.creator){
                let a = $('<a href="#" class="edit-flight-detail">').click(editFlight.bind(this, el))
                $(a).on('click', function (event) {
                    event.preventDefault()
                })
                $(div2).append(a)
            }
            let div3 = $('<div>').text(`${el.seats} Seats (${el.cost} per seat)`)
            $(div).append(h3).append(div1).append(div2).append(div3)
        })
    }

    function editFlight(el) {
        showView('viewEditFlight')
        $('#viewEditFlight').attr('flightId', el._id)
        $('#formEditFlight input[name=destination]').val(el.destination);
            $('#formEditFlight input[name=origin]').val(el.origin);
            $('#formEditFlight input[name=departureDate]').val(el.departure);
            $('#formEditFlight input[name=departureTime]').val(el.departure_time);
            $('#formEditFlight input[name=seats]').val(Number(el.seats))
            $('#formEditFlight input[name=cost]').val(Number(el.cost));
            $('#formEditFlight input[name=img]').val(el.url);
            $('#formEditFlight input[name=public]').val(el.publicOn);

    }
    function saveEditedFlight() {
        let destination = $('#formEditFlight input[name=destination]').val()
        let origin = $('#formEditFlight input[name=origin]').val()
        let departure = $('#formEditFlight input[name=departureDate]').val()
        let departure_time = $('#formEditFlight input[name=departureTime]').val()
        let seats = Number($('#formEditFlight input[name=seats]').val())
        let cost = Number($('#formEditFlight input[name=cost]').val())
        let url = $('#formEditFlight input[name=img]').val()
        let publicOn = $('#formEditFlight input[name=public]').is(':checked')
        let id = $('#viewEditFlight').attr('flightId')
        $.ajax({
            method:"PUT",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/flights/"+ id,
            headers:getKinveyUserAuthHeaders(),
            data:{destination, origin, departure, departure_time, seats, cost, url, publicOn}
        }).then(function (res) {
            showHideMenuLinks()
            showInfo('Successfully edited flight.')
            flightView(res)
        }).catch(handleAjaxError)
    }

    function loadMyFlights() {
        $.ajax({
            method:"GET",
            url: kinveyBaseUrl + 'appdata/' + kinveyAppKey + `/flights?query={"_acl.creator":"${sessionStorage.getItem("userId")}"}`,
            headers: getKinveyUserAuthHeaders()
        }).then(function (resp) {
            showView('viewMyFlights')
            $('#viewMyFlights').empty()
            let h3Main = $('<h3>Your Flights</h3>')
            for (const res of resp) {
                let mainDiv = $('<div class="flight-ticket">')
                let divUnderMain = $('<div class="flight-left" id="myFlightsLeft">')
                let img = $(`<img src="${res.url}" alt="">`)


                $(divUnderMain).append(img)
                let divUnderMain1 = $('<div class="flight-right" id="myFlightsRights">')
                let div = $('<div>')
                let h3 = $('<h3>').text(res.destination)
                let span = $('<span>').text(res.departure)
                $(div).append(h3).append(span)
                let divOrigin = $('<div>').text(res.origin)
                let span1 = $('<span>').text(res.departure_time)
                divOrigin.append(span1)
                let p = $('<p>').text(`${res.seats} Seats (${res.cost}$ per seat)`)
                let a = $('<a href="#" class="remove">REMOVE</a>').click(deleteFlight.bind(this, res))
                let a1 = $('<a href="#" class="details">Details</a>').click(flightView.bind(this, res))
                $(divUnderMain1).append(div).append(divOrigin).append(p).append(a).append(a1)
                $(mainDiv).append(divUnderMain).append(divUnderMain1)
                $('#viewMyFlights').append(mainDiv)
            }
        }).catch(handleAjaxError)
    }

    function deleteFlight(res) {
        $.ajax({
            method: "DELETE",
            url:kinveyBaseUrl + "appdata/" + kinveyAppKey + "/flights/" + res._id,
            headers: getKinveyUserAuthHeaders()
        }).then(function (res) {
            loadMyFlights()
            showInfo('Flight deleted')
        })
    }

    function logoutUser() {
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/_logout",
            headers: getKinveyUserAuthHeaders()
        });
        sessionStorage.clear()
        $('.right-container span').text('')
        showHideMenuLinks()
        showLoginView()
        showInfo('Logout successful.')
    }

    function loginUser() {
        let username = $('#formLogin input[name=username]').val()
        let password = $('#formLogin input[name=pass]').val()
        if(username.length<5){
            showError('User name length has to at least 5 characters long.')
        }
        else if(password===''){
            showError('Password field is required')
        }
        else {
            $.ajax({
                method: "POST",
                url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
                data: {username, password},
                headers: kinveyAppAuthHeaders
            }).then(function (res) {
                saveAuthInSession(res)
                showHideMenuLinks()
                loadHomeViewCatalogue()
                showInfo('Login successful.')
            }).catch(handleAjaxError)
        }
    }


    function registerUser() {
        let username = $('#formRegister input[name=username]').val()
        let password = $('#formRegister input[name=pass]').val()
        let repeatPass = $('#formRegister input[name=checkPass]').val()
        if(username.length<5){
            showError('User name length has to at least 5 characters long.')
        }
        else if(password!==repeatPass){
            showError('Password and repeat pass have to be equal.')
        }
        else if(password==='' && repeatPass===''){
            showError('Password field is required')
        }
        else{
            $.ajax({
                method: "POST",
                url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
                headers: kinveyAppAuthHeaders,
                data: {username, password}
            }).then(function (res) {
                saveAuthInSession(res)
                showHideMenuLinks()
                loadHomeViewCatalogue()
                showInfo('User registration successful.')
            }).catch(handleAjaxError)
        }

    }



}
