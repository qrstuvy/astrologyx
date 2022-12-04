const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signSchema = new Schema({
  sign: String,
  image: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true
});

module.exports = mongoose.model('Sign', signSchema)