const express = require("express")
const routes = express.Router()

const spreadsheetController = require("../../../../modules/useCases/SpreadsheetController")

routes.get("/", spreadsheetController.index)

module.exports = routes
