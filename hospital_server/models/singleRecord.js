const mongoose = require('mongoose');


const singleRecordSchema = mongoose.Schema({
    name: String,
    email: String,
    sp: String,
    spId: Number,
    mess: String
}, {versionKey: false});

const SingleRecord = mongoose.model('singlerecords', singleRecordSchema);

module.exports = {SingleRecord}
