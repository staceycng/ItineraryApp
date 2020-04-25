const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const ItinerarySchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String
    },
    events: [
        {
            name: {
                type: String,
                required: true
            },
            location: {
                type: String,
            },
            image: {
                type: String
            },
            time: {
                type: Date,
                default: Date.now
            },
            notes: {
                type: String
            }
        }
    ],
    collaborators: [
        {
            name: {
                type: String
            },
            email: {
                type: String
            }
        }
    ]

});

module.exports = Itinerary = mongoose.model("itinerary", ItinerarySchema);