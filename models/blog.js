const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

mongoose.set('toJSON', {
  transform: (document, returnedObjectId) => {
    returnedObjectId = returnedObjectId._id.toString();
    delete returnedObjectId._id
    delete returnedObjectId.__v
  }
})

module.exports = new mongoose.model('Blog', blogSchema)