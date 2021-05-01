const mongoose = require("mongoose");

const todolistSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
    }
);

const customSchema = mongoose.Schema(
    {
        name:
        {
            type: String,
            required: true
        },
        customListItems: [todolistSchema]
    }
);

//Any custom lists
const customList = mongoose.model("customlists", customSchema);

module.exports = customList;