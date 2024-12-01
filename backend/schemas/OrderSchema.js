const mongoose=require("mongoose");
const {Schema} = require("mongoose");

const OrderSchema = new Schema({
    name : String,
    qty : Number,
    price : Number,
    mode : String,
});

const OrdersModel = mongoose.model("Order", OrderSchema);

module.exports = OrdersModel;