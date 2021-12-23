const fs = require("fs")
const data = require("../../../data.json")

class SpreadsheetController {
  index(req, res) {
    return res.render("spreadsheet/index", {
      tvs: data.tvs,
      players: data.players,
      labor: data.labor,
    })
  }
  update(req, res) {
    let { tv_quantity, tv_price, player_quantity, player_price, labor } =
      req.body

    const dataValue = {
      tvs: [],
      players: [],
      labor: labor.replace(/[\s,.]+/g, ""),
    }

    tv_quantity.forEach((element, index) => {
      const formatPrice = tv_price[index].replace(/[\s,.]+/g, "")

      dataValue.tvs.push({
        id: data.tvs[index].id,
        quantity: tv_quantity[index],
        price: formatPrice,
        name: data.tvs[index].name,
      })
    })

    player_quantity.forEach((element, index) => {
      const formatPrice = player_price[index].replace(/[\s,.]+/g, "")
      dataValue.players.push({
        id: data.players[index].id,
        quantity: player_quantity[index],
        price: formatPrice,
        name: data.players[index].name,
      })
    })

    fs.writeFileSync(
      "data.json",
      JSON.stringify(dataValue, null, 2),
      {},
      (err) => {
        if (err) return res.redirect("/")

        return res.redirect("/")
      }
    )
  }
}

module.exports = new SpreadsheetController()
