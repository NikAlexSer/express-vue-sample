const express = require('express'),
    path = require('path'),
    port = 3100,
    bodyParser = require('body-parser'),
    morgan = require('morgan')
    app = express();

var indexRouter = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny', ':method :url :remote-user :status :res[content-length/1000] - :response-time ms'))
app.use('/', indexRouter);
app.use(express.static('dist'));

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('server started on ' + port);
});

module.exports = app;