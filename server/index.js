const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { HOST, SERVER_PORT } = require('./config');

const routes  = require('./routes')

const app = express()

app.use(express.static('public'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen({
    host:HOST,
    port: SERVER_PORT
}, () => console.log(`listening on port: ${SERVER_PORT}`));