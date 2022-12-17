const knex = require("knex")(require("../knexfile"))
const fs = require('fs')
const axios = require("axios")
require ('dotenv').config();
const API_ID = process.env.API_ID
const API_KEY=process.env.API_KEY
const API_URL=process.env.API_URL



exports.getJobs = (req, res) => {
    const career = req.body.career
    let url = `${API_URL}/us/search/1?app_id=${API_ID}&app_key=${API_KEY}&what_or=${career}&full_time=1&contract=1`

    axios.get(url).then((response) => {
        return res.json({
            jobs: response.data.results
        })
    }).catch((error) => {
        console.log(error)
        return res.json({
            error: "Error" + error
        })
    })
    
}
