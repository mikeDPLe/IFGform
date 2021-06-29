const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/form-app'));

app.get('/*', (req,res,next) => {
    res.sendFile("index.html", { root: "dist/form-app" });
});


app.listen(process.env.PORT || 8000);
