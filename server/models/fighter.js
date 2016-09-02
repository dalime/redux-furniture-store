const mongoose = require('mongoose');

const fighterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  height: { type: String, required: true },
  record: { type: String, required: true },
  weightclasses: [{ type: String }],
  picture: { type: String }
});

const Fighter = mongoose.model('Fighter', fighterSchema);

module.exports = Fighter;
