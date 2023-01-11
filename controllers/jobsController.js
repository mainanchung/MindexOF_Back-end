const knex = require("knex")(require("../knexfile"))
const fs = require('fs')
const axios = require("axios")
require ('dotenv').config();
const API_ID =process.env.API_ID
const API_KEY=process.env.API_KEY
const API_URL=process.env.API_URL



exports.getJobs = (req, res) => {
    const location = req.body.location
    const career = req.body.career
    console.log(career)
    let url = `${API_URL}/us/search/1?app_id=${API_ID}&app_key=${API_KEY}&what_or=${career}&full_time=1&contract=1`
    let urlWithLocation = `${API_URL}/${location}/search/1?app_id=${API_ID}&app_key=${API_KEY}&what_or=${career}&full_time=1&contract=1`

    if(!location){
        axios.get(url).then((response) => {
            return res.status(200).json({
                jobs: response.data.results
            })
        }).catch((error) => {
            console.log(error)
            return res.status(500).json({
                error: "Error: " + error
            })
        })
    } else {
        axios.get(urlWithLocation).then((response) => {
            return res.status(200).json({
                jobs: response.data.results
            })
        }).catch((error) => {
            console.log(error)
            return res.status(500).json({
                error: "Error: " + error
            })
        });
    }
}
