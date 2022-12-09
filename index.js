const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

const dotenv = require('dotenv');

app.use(cors());
app.use(express.json())
app.use(express.static('public'));

const typesRoutes = require('./routes/types');

app.use('/types', typesRoutes);

app.get("/", (req, res) => {
    res.send("Testing"); 
})

app.listen(PORT, () => {
    console.log('Server stated on http://localhost:8080');
    console.log("Press CTRL + C to stop server"); 
})