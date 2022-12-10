var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes');
var usersRouter = require('./routes/users');
var companyRouter = require('./routes/company');
const staffController = require('./routes/staff')

var app = express();

mongoose.connect('mongodb+srv://superdev:fuse32765@2013110453-fuse.xrdixwz.mongodb.net/restfulapi?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/company', companyRouter);
app.use('/staff', staffController);


module.exports = app;
