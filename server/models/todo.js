const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  googleid: String,
  todo: Array,
});

// compile model from schema
module.exports = mongoose.model("todo", TodoSchema);
