const knex = require("knex")(require("../knexfile"))
const fs = require('fs')
const axios = require("axios")


// exports.index = (req, res) => {
    
// }
// exports.getJobByMutiJ = (req, res) => {
    
// }
exports.getJobs = (req, res) => {
    const career = req.body.career

    let url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=a74cad39&app_key=553a2357dcce6aae9d4b2bd6cbb99884&what_or=${career}`

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
