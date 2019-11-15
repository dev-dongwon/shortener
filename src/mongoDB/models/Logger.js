const mongoose = require("mongoose");

const LogSchema = mongoose.Schema({
  shortUrl: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("log", LogSchema);
