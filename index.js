//require('dotenv').config()

const express = require('express')
const path = require('path') //will help us make paths easily

const PORT = process.env.PORT || 3300

const server= express();

server.use(express.json())

//serving our static assets
server.use(express.static(path.join(__dirname, 'client/build'))) //direct to absolute path to client/build(this is our app)

//endpoints area
server.get('/api', (req, res) => {
    res.json({
        message: 'API is up!'
    })
})

//fallback endpoint that sends index.html
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})