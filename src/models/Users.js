const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bloodType: { type: String, enum: ['AB+', 'AB-', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-']},
  isDonor: { type: Boolean, default: false },
  reason: { type: String},
  schedule: { type: Date },
  daysLeft: { type: String },
  location: { type: String },
  image: { type: String},
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  active: { type: Boolean, default: true },
},
{
  timestamps: true,
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;