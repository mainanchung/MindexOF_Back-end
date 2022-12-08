const knex = require("knex")(require("../knexfile"))
const { v4: uuidv4 } = require('uuid');

exports.index = (req, res) => {

    knex("types")
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) =>
        res.status(400).send(`Error retrieving types: ${err}`)
    )
}
