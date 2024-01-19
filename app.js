// 1. Instantiations
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

const faviconPath = path.join(__dirname, 'public', 'favicon.png');


// 2. Configurations
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// 3. Middleware
app.use(logger('dev'));
app.use(favicon(faviconPath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 4. Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);


// 5. Error handlers
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});


// 6. Server bootup or server export
module.exports = app;