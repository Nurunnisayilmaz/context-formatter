const express = require('express');
const app = express();
const port = 3000;

const formatterRouter = require('C:\\Users\\Nisa\\Desktop\\NodeJs\\context-formatter\\routes\\index.js');

app.use('/api',formatterRouter);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})