const express = require('express');
const app = express();
const routes = require('./routes');
const port = process.env.PORT || 5000
const cors = require("cors")
app.use(cors({
    origin: '*',
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1', routes);

app.get("/", (req, res) => {
    res.status(200).json({
        status: "see-events app is running good",
        time: new Date().toLocaleString()
    })
})



app.listen(port, () => {
    console.log('App is running on port ', port);
})