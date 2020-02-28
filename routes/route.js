// let router = require('express').Router();
const router = require('express').Router();
const questionCtrl = require('../controllers/question.controller');
const topicCtrl = require('../controllers/topic.controller');

router.route('/Question')
    .post(questionCtrl.create)
    .get(questionCtrl.getAllQuestion)

router.route('/topic')
    .post(topicCtrl.create)
    .get(topicCtrl.getAllTopic)

module.exports = router