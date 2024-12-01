const mongoose=require("mongoose");
const { Schema} = require("mongoose");
const PositionSchema = new Schema({
    product: String,
      name: String,
      qty: Number,
      avg: Number,
      price: Number,
      net: String,
      day: String,
      isLoss: Boolean,
});

const PositionsModel = mongoose.model("Position", PositionSchema);

module.exports = PositionsModel;