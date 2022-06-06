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

module.exports = router