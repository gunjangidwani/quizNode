const mongoose =require('mongoose')

const TopicSchema = mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    created_on: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('topic', TopicSchema)