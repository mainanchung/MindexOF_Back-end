const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;
require ('dotenv').config();
const dotenv = require('dotenv');

app.use(cors());
app.use(express.json())
app.use(express.static('public'));

const typesRoutes = require('./routes/types');
app.use('/types', typesRoutes);


const jobsRoutes = require('./routes/jobs');
app.use('/jobs', jobsRoutes);


app.get("/", (req, res) => {
    res.send("Testing"); 
})

app.listen(PORT, () => {
    console.log(`Server stated on http://localhost:${PORT}`);
    console.log("Press CTRL + C to stop server"); 
})