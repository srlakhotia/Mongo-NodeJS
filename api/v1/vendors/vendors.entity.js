const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, unique: true, required: true },
    contact: { type: String, required: true},
    rank: {type: Number, required: true},
    reviews: [{
        revRank: { type: Number, required: true },
        reviewer: { type: String, required: true },
        comments: { type: String },
        reviewedOn: { type: Date, default: Date.now }
    }]
}, { collection: 'vendors' });

schema.index({
    code: 1,
    rank: 1
}, {
    unique: true
});

module.exports = mongoose.model("vendors", schema);