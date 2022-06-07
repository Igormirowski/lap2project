const express = require('express');
const router = express.Router();

const Entry = require('../models/entry');

router.get('/', async (req, res) => {
    try {
        // const entries = await Entry.all
        // res.json(entries)
        res.send('hi there')
    } catch (err) {
        res.status(500).send({ err })
    }
})

//// 
router.get('/', async (req, res) => {
    try {
        const entries = await Entry.all;
        res.status(200).json(entries)
    } catch (err) {
        res.status(500).json({ err })
    }
})

//SHOW 

router.get('/:id', async (req, res) => {
    try {
        const entries = await Entry.findById(req.params.id);
        res.status(200).json(entries)
    } catch (err) {
        res.status(404).json({ err })
    }
})

//CREATE

router.post('/', async (req, res) => {
    try {
        const createEntry = await Entry.create(req.body);
        res.status(201).json(createEntry)
    } catch (err) {
        res.status(422).json({ err })
    }
})

//UPDATE (To double check)

router.put('/:id', async (req, res) => {
    try {
        const updateEntry = await Entry.update(req.body);
        res.status(204).json({success: true});
    } catch (err) {
        res.status(404).json({ err });
    }
})


//DESTROY

router.delete('/:id', async (req, res) => {
    try {
        const entry = await Entry.findById(req.params.id);
        const res = entry.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({ err });
    }
})

//DESTROY 2nd DRAFT 

// router.get('/:id', async (req, res) => {
//     try {
//         const destroyEntry = await Entry.findById(req.params.id);
//         const res = await destroyEntry.destroy();
//         res.status(204).end();
//     } catch (err) {
//         res.status(404).json({ err });
//     }
// })

router.get('/streak/:username', async (req, res) => {
    try {
        const entries = await Entry.getCurrentSleepStreak(req.params.username)
        res.json(entries)
    }catch(err){
        res.status(422).json({err})
    }
})

module.exports = router