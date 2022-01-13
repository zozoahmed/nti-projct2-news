const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const hbs = require('hbs')

app.set('view engine', 'hbs')

const getNews = require('./tools/getNews')
app.get('/', (req, res) => {
    getNews('us', (error, response) => {
        if (error) {
            return res.send({ error })
        }
        res.render('index', {
            title: 'home page',
            response
        })
    })
})

app.listen(port, () => {
    console.log('listening on port 3000')
})

