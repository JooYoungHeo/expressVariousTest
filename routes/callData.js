const express = require('express');
const request = require('request');

const router = express.Router();

router.post('/', (req, res) => {
  let options = {
    url: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    json: req.body
  };

  let thisRes = res;

  request(options, (err, res, body) => {
    thisRes.json(body);
  });
});

router.put('/', (req, res) => {
  res.json(req.body);
});

module.exports = router;
