const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true },
  message: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', MessageSchema);
