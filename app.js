const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

let server = app.listen(3000, 'localhost', function () {
    console.log(server.address());

    let host = server.address().address;
    let port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});