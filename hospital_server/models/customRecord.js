

const mongoose = require('mongoose');


const customRecordSchema = mongoose.Schema({
    email: String,
    mess: String,
    name: String,
    sp: String,
    spId: Number,
    way: String
}, {versionKey: false});

const CustomRecord = mongoose.model('customrecords', customRecordSchema);

module.exports = {CustomRecord}
