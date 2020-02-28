const mongoose = require('mongoose')

const QuestionSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    created_on: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('question', QuestionSchema)