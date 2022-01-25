const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema({
  googleid: String,
  taskscompleted: Number,
});

// compile model from schema
module.exports = mongoose.model("Stats", StatsSchema);
