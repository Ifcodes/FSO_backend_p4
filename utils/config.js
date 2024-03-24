require('dotenv').config();

const mongoUrl = process.env.MONGOURI
const PORT = 3003

module.exports = {
  mongoUrl,
  PORT
};