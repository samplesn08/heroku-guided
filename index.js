require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 1234;

const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")))

app.use('/api/', (_, res) => {
    res.json({data: "Here is the API"})
})

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})

