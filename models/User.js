const mongoose = require('mongoose')
const Schema = mongoose.Schema


let userSchema = new Schema({
  userId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  quest1: {
    type: String,
    required: true
  },
  quest2: [{
    _id: false,
    type: String,
    required: true
  }],
  createdOn: {
    type: Date,
    default: Date.now()
  }
})



mongoose.model('User', userSchema);