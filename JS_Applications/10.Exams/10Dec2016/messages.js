function startApp() {
    sessionStorage.clear()
    showHideMenuLinks()
    showView('viewHome')

    $('#linkMenuAppHome').on('click', showHomeView)
    $('#linkMenuLogin').on('click', showLoginView)
    $('#linkMenuRegister').on('click', showRegisterView)
    $('#linkMenuUserHome').on('click', showUserHomeView)
    $('#linkMenuMyMessages').on('click', myMessages)
    $('#linkMenuArchiveSent').on('click', menuArchiveSent)
    $('#linkMenuSendMessage').on('click', menuSendMessage)
    $('#linkMenuLogout').on('click', logoutUser)

    $('#formLogin').submit(loginUser)
    $('#formRegister').submit(registerUser)
    $('#formSendMessage').submit(sendMessage)
    $("form").submit(function (event) {
        event.preventDefault()
    });

    $('#infoBox', '#errorBox').on('click', function () {
        $(this).fadeOut()
    })
    $(document).on({
        ajaxStart: function () {
            $('#loadingBox').show()
        },
        ajaxStop: function () {
            $('#loadingBox').hide()
        }
    })
    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_Sk32i4kHQ";
    const kinveyAppSecret = "ffa814bd55904dd69bbfb2af42f1bd75";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret),
    };


    function showView(viewName) {
        $('main > section').hide()
        $('#' + viewName).show()
    }

    function showHideMenuLinks() {
        $('#viewAppHome').show()
        if (sessionStorage.getItem('authToken') === null) {
            $('.anonymous').show()
            $('.useronly').hide()
        }
        else {
            $('.anonymous').hide()
            $('.useronly').show()
        }
    }

    function showInfo(message) {
        $('#infoBox').text(message)
        $('#infoBox').show()
        setTimeout(function () {
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
        showView('viewAppHome')
    }

    function showLoginView() {
        showView('viewLogin')
        $('#formLogin').trigger('reset')
    }

    function showRegisterView() {
        showView('viewRegister')
        $('#formRegister').trigger('reset')
    }

    function showUserHomeView() {
        showView('viewUserHome')
        let username = sessionStorage.getItem('userName')
        $('#viewUserHomeHeading').text(`Welcome, ${username}!`)
    }

    function myMessages() {
        let recipient = sessionStorage.getItem('userName')
        showView('viewMyMessages')
        $('#myMessages tbody').empty()
        $.ajax({
            method: "GET",
            headers: getKinveyUserAuthHeaders(),
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey
            + `/messages?query={"recipient_username":"${recipient}"}`
        }).then(function (resp) {
            console.log('yes');
            if (resp.length > 0) {
                console.log(resp);
                for (const res of resp) {
                    let from = formatSender(res.sender_name, res.sender_username)
                    let message = res.text
                    let date = formatDate(res._kmd.lmt)
                    let tr = $('<tr>')
                    tr.append($(`<td>${from}</td>`))
                        .append($(`<td>${message}</td>`))
                        .append($(`<td>${date}</td>`))
                    $('#myMessages tbody').append(tr)
                }
            }

        }).catch(handleAjaxError)
    }

    function formatDate(dateISO8601) {
        let date = new Date(dateISO8601);
        if (Number.isNaN(date.getDate()))
            return '';
        return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
            "." + date.getFullYear() + ' ' + date.getHours() + ':' +
            padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

        function padZeros(num) {
            return ('0' + num).slice(-2);
        }
    }

    function formatSender(name, username) {
        if (!name)
            return username;
        else
            return username + ' (' + name + ')';
    }

    function menuArchiveSent() {
        showView('viewArchiveSent')
        let sender = sessionStorage.getItem('userName')
        $('#sentMessages tbody').empty()
        $.ajax({
            method: "GET",
            headers: getKinveyUserAuthHeaders(),
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + `/messages?query={"sender_username":"${sender}"}`
        }).then(function (resp) {
            if (resp.length > 0) {
                for (const res of resp) {
                    let message = res.text
                    let date = formatDate(res._kmd.lmt)
                    let deleteBtn = $('<button>Delete</button>').click(deleleMessage.bind(this, res._id));
                    let tr = $('<tr>')
                    tr.append($(`<td>${res.recipient_username}</td>`))
                        .append($(`<td>${message}</td>`))
                        .append($(`<td>${date}</td>`))
                        .append($('<td>').append(deleteBtn))
                    $('#sentMessages tbody').append(tr)

                }
            }
        }).catch(handleAjaxError)

    }

    function deleleMessage(msgId) {
        $.ajax({
            method: "DELETE",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages/" + msgId,
            headers: getKinveyUserAuthHeaders(),

        }).then(function (res) {
            showInfo("Message deleted.");
            menuArchiveSent()
        }).catch(handleAjaxError)
    }

    function menuSendMessage() {
        $('#formSendMessage').trigger('reset');
        $('#formSendMessage select').empty();
        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "user/" + kinveyAppKey,
            headers: getKinveyUserAuthHeaders(),
            success: recipientsLoaded
        });

        function recipientsLoaded(recipients) {
            for (let recipient of recipients) {
                let option = $("<option>").val(recipient.username);
                option.text(formatSender(recipient.username, recipient.name));
                $('#formSendMessage select').append(option);
            }
            showView('viewSendMessage');
        }
    }

    function sendMessage() {
        let sender_username = sessionStorage.getItem('userName')
        let sender_name = sessionStorage.getItem('name')
        let recipient_username = $('#msgRecipientUsername').val()
        let text = $('#msgText').val()
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/messages",
            headers: getKinveyUserAuthHeaders(),
            contentType: "application/json",
            data: JSON.stringify({sender_username, sender_name, recipient_username, text})
        }).then(function (res) {
            showInfo('Message sent.')
            menuArchiveSent()
        }).catch(handleAjaxError)
    }

    function logoutUser() {
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/_logout",
            headers: getKinveyUserAuthHeaders()
        });
        sessionStorage.clear()
        $('#spanMenuLoggedInUser').text('')
        showHideMenuLinks()
        showView('viewAppHome')
        showInfo('Logout successful.')
    }

    function loginUser() {
        let username = $('#loginUsername').val()
        let password = $('#loginPasswd').val()

        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
            data: {username, password},
            headers: kinveyAppAuthHeaders
        }).then(function (res) {
            saveAuthInSession(res)
            showHideMenuLinks()
            showUserHomeView()
            showInfo('Login successful.')
        }).catch(handleAjaxError)
    }

    function saveAuthInSession(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken)
        sessionStorage.setItem('userId', userInfo._id)
        sessionStorage.setItem('userName', userInfo.username)
        sessionStorage.setItem('name', userInfo.name)
        let username = userInfo.username
        $('#spanMenuLoggedInUser').show()
        $('#spanMenuLoggedInUser').text('Welcome, ' + username + "!")
    }

    function registerUser() {
        let username = $('#registerUsername').val()
        let password = $('#registerPasswd').val()
        let name = $('#registerName').val()
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
            headers: kinveyAppAuthHeaders,
            data: {username, password, name}
        }).then(function (res) {
            saveAuthInSession(res)
            showHideMenuLinks()
            showUserHomeView()
            showInfo('User registration successful.')
        }).catch(handleAjaxError)
    }


    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }
}
