const mongoose = require("mongoose");

const StatSchema = new mongoose.Schema({
  googleid: String,
  taskscompleted: Number,
});

// compile model from schema
module.exports = mongoose.model("Stat", StatSchema);