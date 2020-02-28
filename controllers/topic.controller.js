const topic = require('../models/topic.model')
const responseCtrl = require('./response.controller')

exports.create = (req, res) => {
    let Topic = new topic
    Topic.topic = req.body.topic;
    Topic.save((err) => {
        if(err) 
            res.json(responseCtrl.response(false, err))
        res.json(responseCtrl.response(true, Topic))
    })
}

exports.getAllTopic = (req, res) => {
    topic.find({}, (err, data) => {
        if(err)
            res.json(responseCtrl.response(false, err))
        res.json(responseCtrl.response(true, data))
    })
}