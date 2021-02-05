const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const setGlobalMiddleware = (app) => {
  app.use(helmet())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(logger('dev'))
};

module.exports = setGlobalMiddleware;
