const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const { CustomRecord } = require("../models/customRecord");

router.post('/', (req, res)=>{


    (async () => {

        CustomRecord.create({
            email: req.body.email,
            mess: req.body.mess,
            name: req.body.name,
            sp: req.body.sp,
            spId: req.body.spId,
            way: req.body.way
        });


        let customRecords = await CustomRecord.find({});
        res.send(customRecords)

    })();

});


module.exports = router;
