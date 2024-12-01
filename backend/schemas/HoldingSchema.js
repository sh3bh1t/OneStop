const mongoose=require("mongoose");
const { Schema } = require("mongoose");

const HoldingSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

const HoldingsModel = mongoose.model('Holding', HoldingSchema);

module.exports = HoldingsModel;