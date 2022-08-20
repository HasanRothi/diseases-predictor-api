const express = require('express')
const router = express.Router()
const SpecalistModel = require('../models/doctor')


router.get('/', async (req, res) => {
    const data = await SpecalistModel.find()
    res.json(data)
})
router.post('/', async (req, res) => {
    const data = new SpecalistModel(res.body)
    const r = await data.save()
    res.json({
        data: r
    })
})

module.exports = router