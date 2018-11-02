function ticketPrice(array) {
    let movie = array[0].toLowerCase()
    let day = array[1].toLowerCase()
    let price = 0
    switch (day){
        case 'monday':
            if(movie==='the godfather'){
                price = 12
            }
            else if(movie==='schindler\'s list'){
                price = 8.5
            }
            else if(movie==='casablanca'){
                price = 8
            }
            else if(movie==='the wizard of oz'){
                price = 10
            }
            else {
                price = "error"
            }
            break;

        case 'tuesday':
            if(movie==='the godfather'){
                price = 10
            }
            else if(movie==='schindler\'s list'){
                price = 8.5
            }
            else if(movie==='casablanca'){
                price = 8
            }
            else if(movie==='the wizard of oz'){
                price = 10
            }
            else {
                price = "error"
            }
            break;
        case 'wednesday':
            if(movie==='the godfather'){
                price = 15
            }
            else if(movie==='schindler\'s list'){
                price = 8.5
            }
            else if(movie==='cCasablanca'){
                price = 8
            }
            else if(movie==='the wizard of oz'){
                price = 10
            }
            else {
                price = "error"
            }
            break;
        case 'thursday':
            if(movie==='the godfather'){
                price = 12.5
            }
            else if(movie==='schindler\'s list'){
                price = 8.5
            }
            else if(movie==='casablanca'){
                price = 8
            }
            else if(movie==='the wizard of oz'){
                price = 10
            }
            else {
                price = "error"
            }
            break;
        case 'friday':
            if(movie==='the godfather'){
                price = 15
            }
            else if(movie==='schindler\'s list'){
                price = 8.5
            }
            else if(movie==='casablanca'){
                price = 8
            }
            else if(movie==='the wizard of oz'){
                price = 10
            }
            else {
                price = "error"
            }
            break;
        case 'saturday':
            if(movie==='the godfather'){
                price = 25
            }
            else if(movie==='schindler\'s list'){
                price = 15
            }
            else if(movie==='casablanca'){
                price = 10
            }
            else if(movie==='the wizard of oz'){
                price = 15
            }
            else {
                price = "error"
            }
            break;
        case 'sunday':
            if(movie==='the godfather'){
                price = 30
            }
            else if(movie==='schindler\'s list'){
                price = 15
            }
            else if(movie==='casablanca'){
                price = 10
            }
            else if(movie==='the wizard of oz'){
                price = 15
            }
            else {
                price = "error"
            }
            break;
        default: price = "error"
            break
    }
    console.log(price)
}
ticketPrice(['The maya','Friday'])