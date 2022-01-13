const request = require('request')
const getNews = (country, callback) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=9283caf2dda749c382f56b81a99b1a72`
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback(error, undefined)
        }
        else if (response.body.message) {
            callback(response.body.message, undefined)
        }
        else if (response.body.articles.length === 0) {
            callback('error country name', undefined)
        }
        else {
            callback(undefined, response.body.articles)
        }
    })
}

module.exports = getNews