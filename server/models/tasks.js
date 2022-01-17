const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema({
  googleid: String,
  todo: Array,
});

// compile model from schema
module.exports = mongoose.model("Tasks", TasksSchema);
