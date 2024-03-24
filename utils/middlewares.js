const {info} = require('./logger')

// request logger middleware
const requestLogger = (req, res, next) => {
  info('Method: ', req.method);
  info('Path: ', req.path);
  info('Body: ', req.body);
  info('---')

  next();
}

// Unknown endpoint middleware
const unknownEndpoint = (req, res, next) => {
  res.status(404).send({error: 'Unknown endpoint'});

  next()
}

// Error handler 
const errorHandler = (err, req, res, next) => {
  (err.message)

  if(err.name === 'CastError'){
    res.status(400).send({error: 'Invalid Id'})
  } else if (err.name === 'ValidationError'){
    res.status(400).send({error: err.message})
  }

  next(err)
}

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
}