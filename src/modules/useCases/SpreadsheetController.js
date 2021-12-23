const fs = require("fs")
const data = require("../../../data.json")

class SpreadsheetController {
  async index(req, res) {
    return res.render("spreadsheet/index", {
      tvs: data.tvs,
      players: data.players,
    })
  }
}

module.exports = new SpreadsheetController()
