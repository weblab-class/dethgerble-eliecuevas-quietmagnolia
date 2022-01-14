const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  daysonevolve: Number,
  longeststreak : Number,
  currentstreak: Number,
  taskscompleted: Number,
  
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
