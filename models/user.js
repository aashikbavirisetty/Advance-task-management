const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Admin', 'Manager', 'User'], required: true },
  organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true }
});

module.exports = mongoose.model('User', UserSchema);
