const express = require('express');
const app = express();
const mongoose = require('mongoose');

const path = process.env.PORT || 2000;

// const userRouter = require('/routing/user.js');

const dataRouter = require('./routing/dataRouting');
const userRouter = require('./routing/userRouting');

//  middleware

app.use(express.json());
// app.use(cors());

mongoose.connect(


   ' mongodb+srv://qqqxin_123:OM2Hc0KKGOLsX7ht@cluster0-drsdx.mongodb.net/react?retryWrites=true',

    { useNewUrlParser: true }

)
.then(() => {
    console.log('connected to database');
})
.catch(err => {
    console.log('connection failed', err);
});

// to get rid of this error
// (node:66003) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.

mongoose.set('useCreateIndex', true);

// router

app.use('/', userRouter);
app.use('/', dataRouter);


 //  routing it in port 4000

app.listen(path,() => console.log("server is running in port 2000"));