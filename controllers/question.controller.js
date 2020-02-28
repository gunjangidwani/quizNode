const question = require('../models/question.model')
const respCtrl = require('./response.controller')


exports.create = (req, res) => {
    let Question = new question 
    Question.question = req.body.question;
    Question.answer = req.body.answer;
    Question.topic = req.body.topic;
    Question.level = req.body.level;
    
    Question.save((err) => {
        if(err) 
            res.json(respCtrl.response(false, err))
        res.json(respCtrl.response(true, Question))
    })
}

exports.getAllQuestion = (req, res) => {
    question.find({}, (err, data) => {
        if(err)
            res.json(respCtrl.response(false, err))
        res.json(respCtrl.response(true, data))
    })
}