const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  googleid: String,
  task: String,
  date: Date,
  complete: Boolean,
});

// compile model from schema
module.exports = mongoose.model("Task", TaskSchema);
