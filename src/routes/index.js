import projectsRouter from './projects';

var usersRouter = require('./users');
//var projectsRouter = require('./projects');

module.exports = function (app) {
  var express = require('express');
  var router = express.Router();

  /* GET home page. */
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Default page' });
  });

  // Users
  app.use('/users', usersRouter);

  // Projects
  app.use('/projects', projectsRouter);

  return router;
};
