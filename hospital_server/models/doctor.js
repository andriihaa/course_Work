const mongoose = require('mongoose');


const doctorSchema = mongoose.Schema({
    id: Number,
    name: String,
    spId: Number,
    nameSp: String,
    about: String
}, { versionKey: false });

const Doctor = mongoose.model('doctors', doctorSchema);

module.exports = { Doctor }
