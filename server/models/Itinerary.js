//Mongoose Itinerary model goes in here

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const ItinerarySchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }

});

module.exports = ItinerarySchema = mongoose.model("itinerary", UserSchema);