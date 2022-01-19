const express = require('express');
const app = express();
const routes = require('./routes');
const port = 3000

app.use(express.json());

<<<<<<< HEAD
app.use('/api/v1', routes);
=======
app.use('/api/v1/', routes);
>>>>>>> eebb2096331fd89d617bae4a7b604538d2f58e7b

app.listen(port, () => {
    console.log('App is running on port ', port);
})