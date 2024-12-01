const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser= require("body-parser");
const cors= require("cors");



app.use(cors());
app.use(bodyParser.json());

require("dotenv").config();
const port = 3030 || process.env.port;
const uri = process.env.MONGO_URL;

const HoldingsModel = require("./schemas/HoldingSchema");
const PositionsModel = require("./schemas/PositionSchema");
const OrdersModel= require("./schemas/OrderSchema");

main().then(() => {
    console.log("connected to DB!");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(uri);
}


app.get('/allHoldings', async (req,res)=>{
    let allHoldings= await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async (req,res)=>{
    let allPositions= await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", async(req,res)=>{
    let newOrder = new OrdersModel({
        name : req.body.name,
        qty : req.body.qty,
        price : req.body.price,
        mode : req.body.mode,
    });

    await newOrder.save();

    res.send("order saved"); 
});

app.listen(port, () => {
    console.log(`server listening to port ${port}`);
});