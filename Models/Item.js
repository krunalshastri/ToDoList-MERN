const mongoose = require("mongoose");

const todolistSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
    }
);

//today's list
const Item = mongoose.model("items", todolistSchema);

module.exports = Item;