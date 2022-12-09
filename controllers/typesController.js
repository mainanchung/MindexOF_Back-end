const knex = require("knex")(require("../knexfile"))
const fs = require('fs')
// const { v4: uuidv4 } = require('uuid');


exports.index = (req, res) => {
    knex("types")
    .then((data) => {
        const allDatas = (data)
        let convertedData = [...allDatas,allDatas.map((ele) => {ele.trait = JSON.parse(ele.trait); ele.career = JSON.parse(ele.career)} )]

        res.status(200).json(convertedData);
        // res.status(200).json(data);

    })
    .catch((err) =>
        res.status(400).send(`Error retrieving types: ${err}`)
    )
}
