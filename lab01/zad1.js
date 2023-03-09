'use strict';
const express = require('express')
const basicAuth = require('express-basic-auth')

const app = express()
const port = 3000

app.use(basicAuth({
    users: { 'admin': '00000' }
}))

app.get('/endpoint', (req, res) => {
    if (res.statusCode === 200) {
        res.send('Udało się zalogować!')
    }
})

app.listen(port, (err) => {
    console.log(`Server running on port: ${port}`);
    if (err) {console.log(err)}
})
