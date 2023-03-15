const express = require('express')
const axios = require('axios')
const { param } = require('express/lib/request')

const app = express();

const authEndpoint ="" // authorize
const tokenEndpoint = "" // ouath/token

const clientID = ""; // client ID
const clientSecret = "" // client secret

const redirectURL = "" // url

const authRequest=`${authEndpoint}?
response_type=code&
client_id=${clientID}&
redirect_uri=${redirectURL}&
state=1234`;

app.use((req,res,next) => {
    console.log('HEADERS');
    console.log(req.headers);
    
    console.log('PARAMS');
    console.log(req.query);
    next();
})

app.get('/login', (req,res) => {
    res.set('Content-Type', 'text/html')
    res.send(`
    <html>
    <body>
    <h3>Witanko</h3>
    <a href=${authRequest}>Login</a>
    </body>
    </html>
    `)
})

app.get('/myredirect', (req, res) => {
    const params = new URLSearchParams();
    params.append('grant-type', 'authorization_code');
    params.append('redirect_uri', redirectURL);
    params.append('client_id', clientID);
    params.append('client_secret', clientSecret);
    params.append('code', req.query.code);
    return axios.post(tokenEndpoint, params)
    .then(result => {
        accessToken = result.data.accessToken || ''
        console.log("Rezultat zapytania o token");
        console.log(accessToken);
    })
})

app.listen(5000)
