const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        default: 'DEN',
        enum: ['DTW', 'AUS', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date
    }
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: { 
        type: String,
        enum: ['Delta', 'American', 'Southwest', 'United', 'Spirit']
    },
    airport: {
        type: String,
        default: 'DEN',
        enum: ['DTW', 'AUS', 'DEN', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        required: true,
        // DEFAULT IS NOT WORKING
        default: function() {
            var currentDate = new Date();
            currentDate.setFullYear(currentDate.getFullYear() + 1);
            return currentDate;
        }
    },
    destinations:[destinationSchema],
    tickets: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Ticket'
    }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);