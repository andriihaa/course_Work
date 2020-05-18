const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const { Specialization } = require("../models/spesial");
const Type = mongoose.Schema({ type: String, prise: Number });

router.get('/', (req, res)=>{


    (async () => {
        // Specialization.create({
        //     id: 1,
        //     nameSp: 'ГІНЕКОЛОГІЧНІ ПОСЛУГИ',
        //     types: [{
        //         type: 'Огляд гінеколога (первинний)',
        //         prise: 400
        //     },{
        //         type: 'Коментар аналізів',
        //         prise: 150
        //     },{
        //         type: 'Коагуляція радіохвильова',
        //         prise: 950
        //     },{
        //         type: 'Видалення ВМ системи з обстеженням біоптату',
        //         prise: 800
        //     },{
        //         type: 'Петльова ексцизія',
        //         prise: 1990
        //     },{
        //         type: 'Мазок цитологія',
        //         prise: 150
        //     },{
        //         type: 'Рідинна цитологія',
        //         prise: 450
        //     },]
        // });
        //
        // Specialization.create({
        //     id: 2,
        //     nameSp: 'КОНСУЛЬТАЦІЇ ЛІКАРІВ',
        //     types: [{
        //         type: 'Консультація лікаря-дитячого гінеколога в клініці',
        //         prise: 560
        //     },{
        //         type: ' Консультація лікаря-ревматолога',
        //         prise: 500
        //     },{
        //         type: 'Консультація професора, лікаря-уролога',
        //         prise: 800
        //     },{
        //         type: 'Незалежний експертний висновок лікаря-радіолога',
        //         prise: 1500
        //     },{
        //         type: 'Консультація лікаря-радіолога в клініці',
        //         prise: 500
        //     },{
        //         type: ' Консультація професора, лікаря-гінеколога вищої категорії в клініці',
        //         prise: 700
        //     }]
        // });
        //
        // Specialization.create({
        //     id: 3,
        //     nameSp: 'СУПРОВІД ВАГІТНОСТІ ',
        //     types: [{
        //         type: 'I триместр (консультація гінеколога (3 прийоми)',
        //         prise: 8030
        //     },{
        //         type: 'ІІ триместр (консультація гінеколога (3 прийоми)',
        //         prise: 7330
        //     },{
        //         type: 'ІІ триместр - багатоплідна вагітність (консультація гінеколога (3\n' +
        //             'прийоми)',
        //         prise: 7510
        //     },{
        //         type: 'ІІІ триместр (консультація гінеколога (4 прийоми)',
        //         prise: 5830
        //     },{
        //         type: 'ІІІ триместр – багатоплідна вагітність (консультація гінеколога (4 прийоми)',
        //         prise: 6190
        //     },{
        //         type: 'I триместр - багатоплідна вагітність (консультація гінеколога (3\n' +
        //             'прийоми)',
        //         prise: 8410
        //     }]
        // });



        let specialization = await Specialization.find({});
        res.send(specialization)

    })();

});


router.get('/:id', (req, res)=>{


    (async () => {

        let specialization = await Specialization.findOne({id: req.params.id});
        res.send(specialization)


    })();

});


module.exports = router;
