const express = require('express');
const router = require('./Entrypoint/Routes/index.ts');
const app = express();
const port = 3000;

app.listen(port, function() {
  console.log('Example app listening on port 3000!');
});

app.use(express.json())
app.use(router)


module.exports = app;