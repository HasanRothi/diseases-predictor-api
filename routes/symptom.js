const express = require('express')
const router = express.Router()
const SymptopmModel = require('../models/symptom')

router.get('/', async (req, res) => {
    const data = await SymptopmModel.find()
    res.json(data)
})
router.post('/', async (req, res) => {
    const data = new SymptomModel(res.body)
    const r = await data.save()
    res.json({
        data: r
    })
})

module.exports = router