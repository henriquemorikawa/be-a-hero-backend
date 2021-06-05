const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type:String, required: true },
    bloodType: { type: String, enum: ['AB+', 'AB-', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-'], required: true },
    type: { type: String, enum: ['Sangue total', 'Plaqueta'], required: true },
    location: { type: String, required: true },
    contact: { type: String, required: true },
    public: { type: Boolean, required: true }
},
{
    timestamps: true,
})

const Requests = mongoose.model('Request', requestSchema);

module.exports = Requests;