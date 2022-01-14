const mongoose = require("mongoose");

const FarmSchema = new mongoose.Schema({
  googleid: String,
  farm: Array,
});

// compile model from schema
module.exports = mongoose.model("farm", FarmSchema);
