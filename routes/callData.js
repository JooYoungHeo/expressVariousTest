const express = require('express');
const request = require('request');

const router = express.Router();

router.post('/', (req, res) => {
  let options = {
    url: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
    method: 'PUT'
  };

  let thisRes = res;

  request(options, (err, res, body) => {
    thisRes.json(JSON.parse(body));
  });
});

router.put('/', (req, res) => {
  res.json({
    list: [4,5,6]
  });
})

module.exports = router;
