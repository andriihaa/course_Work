const mongoose = require('mongoose');
const Type = mongoose.Schema({ type: String, prise: Number });

const specializationSchema = mongoose.Schema({
    id: Number,
    spId: Number,
    nameSp: String,
    about: String
}, { versionKey: false });

const Specialization = mongoose.model('specializations', specializationSchema);

module.exports = { Specialization }
