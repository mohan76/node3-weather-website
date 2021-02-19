const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d47c7d8be46099835f6565588ca85b93&query='+encodeURIComponent(longitude)+','+encodeURIComponent(latitude)+'&units=f'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined)
        } else if (body.error) {
            callback('Unable to find location',undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degree out. It feels like '+body.current.feelslike+' degree out.')
        }
    })
}

module.exports = forecast