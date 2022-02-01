const mongoose = require("mongoose")
const mongoosSlugPlugin=require("mongoose-slug-plugin")

const EventSchema = new mongoose.Schema({
    organizer: {type: String, maxlength: 20, required: true, unique: true},
    name: {type: String, validate: [
        {validator(value) {return !value.includes("event")}, message: "Name cannot include the word `event`"}]},
    email: {type: String, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
    image: {type: String, required: true},
    numOfSeats: {type: Number, min: 5},
    bookedSeats: {type: Number, default: 0, 
        validate: [function (value) {return this.numOfSeats >= value }]},
    startDate: {type: Date, min: Date.now},
        // validate: [function (value) {return this.createdAt <= value }]}, why won't this work??
    endDate: {type: Date,
        validate: [function (value) {return this.startDate <= value }]} 
        // min: this.startDate}
},
{timestamps: true}
)

module.exports = mongoose.model("Event", EventSchema);