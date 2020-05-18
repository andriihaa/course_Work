const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const { SingleRecord } = require("../models/singleRecord");

router.post('/', (req, res)=>{


    (async () => {

        SingleRecord.create({
            name: req.body.name,
            email: req.body.email,
            sp: req.body.sp,
            spId: req.body.spId,
            mess: req.body.mess
        });


        let singleRecords = await SingleRecord.find({});
        res.send(singleRecords)

    })();

});


module.exports = router;
