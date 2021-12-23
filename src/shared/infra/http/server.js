const express = require("express")
const nunjucks = require("nunjucks")
const routes = require("./routes")
const methodOverride = require("method-override")

const app = express()

app.use(express.json())

app.set("view engine", "njk")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
app.use(routes)

nunjucks.configure("src/modules/views", {
  express: app,
  autoescape: false,
  noCache: true,
})

app.listen(5000, () => {
  console.log("Server running on port 3000")
})
