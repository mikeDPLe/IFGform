const express = require('express')
const app = express()
const port = 3000

var path = require('path');

app.use(express.static(path.join(__dirname, '.')));

app.get('/', (req, res) => {
  res.sendFile('/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})