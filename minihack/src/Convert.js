export function timeConvert(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000)
    var year = a.getFullYear()
    var month = a.getMonth()
    var date = a.getDate()
    var time = date + '/' + month + '/' + year
    return time
}

export function imageConvert(status) {
    var imageUrl = require('../image/rain.png')
    switch (status) {
        case 'Rain':
            imageUrl = require('../image/rain.png')
            break
        case 'Clouds':
            imageUrl = require('../image/clouds.png')
            break
        case 'Clear':
            imageUrl = require('../image/clear.png')
            break
        case 'Snow':
            imageUrl = require('../image/snow.png')
            break
    }
    return imageUrl
}

export function tempConvert(doC, temp) {
    if (doC) {
        return Math.floor(temp - 273)
    } else {
        return Math.floor((temp - 273) * 1.8 + 32)
    }
}
