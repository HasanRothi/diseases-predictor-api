const express = require('express')
const router = express.Router()
const DoctorModel = require('../models/doctor')


router.get('/', async (req, res) => {
    const data = await DoctorModel.find()
    res.json(data)
})
router.post('/', async (req, res) => {
    const data = new DoctorModel(res.body)
    const r = await data.save()
    res.json({
        data: r
    })
})

module.exports = router