const mongoose = require('mongoose');

const centerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  bloodLevel: { type: String, required: true },
  image: { type: String, required: true}
  // user: { type: mongoose.Types.ObjectId, ref: 'User' },
},
{
  timestamps: true,
});

const Centers = mongoose.model('Center', centerSchema);

module.exports = Centers;
