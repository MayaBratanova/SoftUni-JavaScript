function attachEvents() {
    const baseUrl = 'https://judgetests.firebaseio.com/locations.json';
    const weatherUrl = 'https://judgetests.firebaseio.com/forecast/today/';
    const upcomingWeatherUrl = 'https://judgetests.firebaseio.com/forecast/upcoming/';
    $('#submit').click(GetWeather);
    function displayError() {
        alert('error')
    }
    function GetWeather() {
        $('#forecast').css('display','block');
        let code = '';
        $.get(baseUrl).then((weatherData)=> {
            let location = $('#location').val();
            for (let data of weatherData) {
                if(location == data.name) {
                    code=data.code;
                }
            }
            $.get(weatherUrl + `${code}.json`).then((data)=> {
                let condWeather = '';
                if(data.forecast.condition=="Sunny") {
                    condWeather = '☀';
                }else if(data.forecast.condition=="Partly sunny") {
                    condWeather = '⛅';
                }else if(data.forecast.condition=="Overcast") {
                    condWeather = '☁';
                }
                else if(data.forecast.condition=="Rain") {
                    condWeather = '☂';
                }
                let conditionSymbol = $('<span class="condition symbol">').text(`${condWeather}`);

                $('#current').find('.label').after(conditionSymbol);
                let condition = $('<span class="condition"></span>');
                let name = data.name;
                let townName = $('<span class="forecast-data">').text(name);
                let highLow = $('<span class="forecast-data">').text(`${data.forecast.low}°/${data.forecast.high}°`);
                let forecast = $('<span class="forecast-data">').text(data.forecast.condition);
                condition.append(townName);
                condition.append(highLow);
                condition.append(forecast);
                $(conditionSymbol).after(condition);

                $.get(upcomingWeatherUrl + `${code}.json`).then((data)=> {
                    //console.dir(data)
                    // console.dir(d['condition']);
                    // console.dir(d['high']);
                    // console.dir(d['low']);

                    for (let d of data['forecast']) {
                        if(d['condition']=="Sunny") {
                            condWeather = '☀';
                        }
                        else if(d['condition']=="Partly sunny") {
                            condWeather = '⛅';
                        }
                        else if(d['condition']=="Overcast") {
                            condWeather = '☁';
                        }
                        else if(d['condition']=="Rain") {
                            condWeather = '☂';
                        }

                        let condition = $('<span class="upcoming">')
                            .append($('<span class="symbol">').text(condWeather));
                        let highLow = $('<span class="forecast-data">').text(`${d['low']}°/${d['high']}°`);
                        let forecast = $('<span class="forecast-data">').text(`${d['condition']}`);
                        condition.append(highLow);
                        condition.append(forecast);
                        $('#upcoming').append(condition);
                    }
                }).catch(displayError)
            }).catch(displayError);
        }).catch(displayError)
    }
}