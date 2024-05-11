const mongoose = require("mongoose");

// Create a Mongoose schema for items

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },


});

itemSchema.set("toJSON",
    {
        transform: (_, obj) => {
            obj.id = obj._id;
            delete obj._id;
            delete obj.__v;

        },
    })

// Create a Mongoose model for products
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;