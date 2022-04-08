const express = require('express');
const app = express();
const port = 3000;

const formatterRouter = require('./formatterRouter');

app.use('/context',formatterRouter);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})