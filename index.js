require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 1234;

app.use(cors());
app.use(express.json())

app.use('/api/', (_, res) => {
    res.json({data: "Here is the API"})
})

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})

