const mongoose = require('mongoose');

const benefitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  value: { type: String, required: true},
  image: { type: String, required: true}
},
{
  timestamps: true,
});

const Benefit = mongoose.model('Benefit', benefitSchema);

module.exports = Benefit;