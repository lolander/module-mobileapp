const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  deviceId: {
    type: String,
    required: true,
  },
  isAuthorized: {
    type: Boolean,
    default: false,
  },
  authorizationToken: {
    type: String,
  },
});

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  devices: [deviceSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
