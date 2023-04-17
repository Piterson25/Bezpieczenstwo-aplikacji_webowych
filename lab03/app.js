const express = require('express');
const app = express();
const {NodeAdapter} = require("ef-keycloak-connect");
const config = require(`./config.json`);
const keycloak = new NodeAdapter(config)
const PORT = 3004;

app.use(keycloak.middleware())

app.get('/app', keycloak.protect(), (req, res) => {
    res.send('Hello! 😎');
})

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
});
