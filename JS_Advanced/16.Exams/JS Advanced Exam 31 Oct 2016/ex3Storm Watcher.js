let result = (function () {
    let counter = 0

    return class Record {

        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = counter++
            this.temperature = temperature
            this.humidity = humidity
            this.pressure = pressure
            this.windSpeed = windSpeed
        }

        check(temp, pressure, windSpeed) {
            if (temp < 20 && (pressure < 700 || pressure > 900) && windSpeed > 25) {
                return 'Stormy'
            }
            else {
                return 'Not stormy'
            }
        }

        toString() {
            let str = ''
            str += `Reading ID: ${this.id}\nTemperature: ${this.temperature}*C\nRelative Humidity: ${this.humidity}%\nPressure: ${this.pressure}hpa\nWind Speed: ${this.windSpeed}m/s\nWeather: ${this.check(this.temperature, this.pressure, this.windSpeed)}`
            return str
        }
    }

})()
let record1 = new result(32, 66, 760, 12);
console.log(record1.toString());

let record2 = new result(10, 40, 680, 30);
console.log(record2.toString());
