const express = require('express');
const bodyParser = require('body-parser');
let api = require('./routes');

let app = express();
let port = 3000;

app.use(bodyParser.json());
app.use('/', api);

app.listen(port, () => {
  console.log(`server start # ${port}`);
});
