const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

//User schema for user registration and authentication
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    require: true,
  },
  middlename: {
    type: String,
    require: false,
  },
  surname: {
    type: String,
    require: true,
  },
  phoneNO: {
    type: Number,
    require: true,
    length: 10,
  },
  email: {
    type: String,
    require: false,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
