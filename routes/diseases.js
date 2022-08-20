const express = require('express')
const router = express.Router()
const DiseasesModel = require('../models/doctor')


router.get('/', async (req, res) => {
    const data = await DiseasesModel.find()
    res.json(data)
})
router.post('/', async (req, res) => {
    const data = new DiseasesModel(res.body)
    const r = await data.save()
    res.json({
        data: r
    })
})
router.post('/predictor', async (req, res) => {
    const data = await DiseasesModel.find({
        symptoms: {
            $in: req.body.symptoms
        }
    }).populate('doctor');
    res.json(data)
})

module.exports = router