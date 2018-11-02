function attachEventsListeners() {
    let fromText = Number(document.getElementById('inputDistance').value)
    console.log(fromText);
    let inputUnits = document.getElementById('inputUnits').value
    console.log(inputUnits);
    let outputUnits = document.getElementById('outputUnits').value
    console.log(outputUnits);
    let outputText = document.getElementById('outputDistance').value
    console.log(outputText);
    let value = 0
    switch (inputUnits){

        case 'Kilometers': switch (outputUnits) {
            case 'Kilometers': value = inputUnits
                break
            case'Meters':value = inputUnits/1000
                break
            case 'Centimeters':value = inputUnits/100000
                break
            case'Millimeters':value = inputUnits/1000000
                break
            case 'Miles':value = inputUnits*0.621371192
                break
            case'Yards':value = inputUnits*109.36
                break
            case 'Feet':value = inputUnits*3280.8399
                break
            case'Inches':value = inputUnits*39370.0787
                break

        }
            outputText.value = value
            break
        case'm':
            break
        case 'cm':
            break
        case'mm':
            break
        case 'mi':
            break
        case'yrd':
            break
        case 'ft':
            break
        case'in':
            break
    }

}
attachEventsListeners()