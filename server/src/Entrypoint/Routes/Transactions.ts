const router = require('express').Router();

const controller = require('../Controllers/index.ts').transactions;
const RestfulRoutes = require('./RestfulRoutes.ts');

RestfulRoutes(router, controller)
  .crud();

module.exports = router;