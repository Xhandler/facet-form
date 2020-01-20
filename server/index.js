const express = require('express')
const bodyParser = require('body-parser')

const { host, serverPort} = require('./config');

const routes  = require('./routes')

const app = express()

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'public/index.html'));
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen({
    host,
    port: serverPort
}, () => console.log(`listening on port: ${serverPort}`));