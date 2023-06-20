const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  nickname: { type: String, required: true },
  password: { type: String, required: true },
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model('member', MemberSchema);
