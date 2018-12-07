const express = require('express');

const dataSchema = require('../modal/dataModal');

const router = express.Router();


// getting localhost://2000/data

router.get('/data', (req, res) => {

  const dataFind = dataSchema.find();

  dataFind.then(doc => {

    res.json({

      message: "successfully pulled",
      data:doc

    })
  })
})

//  posting

router.post("/data", (req, res) => {

  // create new data

  const data = new dataSchema ({

    name: req.body.name,
    age: req.body.age

  });

  // save it

  data.save().then(response => res.json({
    message: "success",
    res: response
  }))

  .catch(
    error => {res.json({error})}
  )
});

module.exports = router;