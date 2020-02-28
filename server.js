const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/route');

const app = express();

app.use(bodyParser.json());
// app.use('/',cors);
app.use('/', router);

app.get('/', (req, res) => res.send('Hello World!'))

const uri = "mongodb+srv://gunjan:Axisrooms321%23@cluster0-s80bg.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true });
// mongoose.connect('mongodb+srv://quizNode:quizNode@cluster0-rf2tg.mongodb.net/test?retryWrites=true&w=majority',  { useNewUrlParser: true })

app.listen(3001, () => {
    console.log("node server Started at: 3001")
})
