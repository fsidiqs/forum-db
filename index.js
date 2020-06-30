const express = require('express');
const { prototype } = require('module');
const app = express();

app.get('/client', (req, res) => {
    res.send("this is the db!");
})

const port = process.env.PORT || 4444;
app.listen(port);