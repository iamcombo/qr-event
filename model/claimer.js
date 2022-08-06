const mongoose = require('mongoose');

const ClaimerSchema = new mongoose.Schema({
  address: {
    type: String,
    required: [true, 'Address is required']
  },
  bitriel_Id: {
    type: String,
    required: [true]
  },
  created_At: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Claimer', ClaimerSchema);