const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({

    name : String,
    price : Number,
    img : String,
    desc : String,
    review : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Review"
        }
    ],
    status:String

})

const Product = mongoose.model("Product", productSchema);

module.exports = Product