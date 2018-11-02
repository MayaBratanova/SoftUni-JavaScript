function timer() {
    let seconds = $('#seconds')
    let minutes = $('#minutes')
    let hours = $('#hours')

    let interval = null


    $('#start-timer').on('click',function () {

        if(!interval) {
            interval = setInterval(step, 1000)
       }


    })
    $('#stop-timer').on('click',function () {
        clearInterval(interval)
        interval = null
    })
    function step() {
        let sec = seconds.text()
        let min = minutes.text()
        let hrs = hours.text()

        seconds.text(`0${+sec + 1}`.slice(-2));

        if (sec >= 59) {
            seconds.text('00');
            minutes.text(`0${+min + 1}`.slice(-2));
            if (min >= 59) {
                minutes.text('00');
                hours.text(`0${+hrs + 1}`.slice(-2));
            }
        }
    }
}