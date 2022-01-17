const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema({
  googleid: String,
  daysonevolve: Number,
  longeststreak : Number,
  currentstreak: Number,
  taskscompleted: Number,
});

// compile model from schema
module.exports = mongoose.model("Stats", StatsSchema);
