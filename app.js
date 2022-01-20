const express = require('express');
const app = express();
const routes = require('./routes');
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/v1', routes);

app.listen(port, () => {
    console.log('App is running on port ', port);
})