const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'InProgress', 'Completed'], required: true },
  dueDate: { type: Date, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true }
});
TaskSchema.index({ status: 1 });
TaskSchema.index({ dueDate: 1 });

module.exports = mongoose.model('Task', TaskSchema);
