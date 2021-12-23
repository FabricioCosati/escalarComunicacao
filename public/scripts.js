// Geral
function formatPrice(input) {
  setTimeout(function () {
    let value = input.value

    value = value.replace(/[^0-9-]/g, "").replace(/(?!^)-/g, "")
    value = Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
      .format(value / 100)
      .replace("R$", "")

    if (input.id.includes("total")) {
      input.value = `R$ ${value}`
    } else {
      input.value = value
    }
  }, 1)
}

// Tvs & Players
function changeValues(e) {
  let index = 0

  const input = document.getElementById(`${e.target.id}`)
  if (input.id.includes("qtd")) {
    index = 2
    input.value = e.target.value
  } else {
    input.value = parseFloat(e.target.value.replace(",", "").replace(".", ""))
  }

  const parent = input.parentNode.parentNode.parentNode

  const value = parent.children[index].getElementsByTagName("input")[0].value

  const totalEvent = parent.children[3]

  multiply(totalEvent, input.value, value)
}

function multiply(event, val1, val2) {
  const total = val1 * val2
  event.getElementsByTagName("div")[0].getElementsByTagName("input")[0].value =
    total

  lineValues()
  totalValue()
  laborValue()
  totalBudget()
}

function lineValues() {
  const tables = document.querySelectorAll("table")

  for (let i = 0; i < tables.length; i++) {
    const trs = tables[i].getElementsByTagName("tr")

    for (let i = 1; i < trs.length; i++) {
      if (trs[i].children[3].getElementsByTagName("div")[0] === undefined) {
        break
      }

      const totalField = trs[i].children[3]
        .getElementsByTagName("div")[0]
        .getElementsByTagName("input")[0]

      const quantity = Number(
        trs[i].children[0].getElementsByTagName("input")[0].value
      )
      let price = trs[i].children[2].getElementsByTagName("input")[0]
      if (price.value.includes(",")) {
        price.value = price.value.replace(",", "").replace(".", "")
      }
      formatPrice(price)

      const total = quantity * parseFloat(price.value)

      totalField.value = total
      formatPrice(totalField)
    }
  }
}

function totalValue() {
  let total = 0
  let count = 1

  const inputs = document.querySelectorAll(".total")

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i].getElementsByTagName("input")[0]
    const trs = document.querySelectorAll("table")[i].getElementsByTagName("tr")

    for (let j = 1; j < trs.length; j++) {
      if (trs[j].children[3].getElementsByTagName("div")[0] === undefined) {
        break
      }

      const value = Number(
        trs[j].children[3]
          .getElementsByTagName("div")[0]
          .getElementsByTagName("input")[0].value
      )

      total += value
      count++
    }

    input.value = total
    formatPrice(input)
    total = 0
  }
}

function format(input) {
  let value = input.value

  value = value.replace(/[^0-9-]/g, "").replace(/(?!^)-/g, "")
  value = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)

  return value
}

function formatQuant(input) {
  setTimeout(function () {
    setInterval(function () {
      let value = input.value
      value = Number(value.replace(/\D/gi, "")).toFixed(0)
      input.value = value
    })
  }, 1)
}

// Mão de Obra
function changeLabor(e) {
  const input = e.target

  input.value = parseFloat(e.target.value.replace(",", "").replace(".", ""))

  formatPrice(input)

  lineValues()
  totalValue()
  totalBudget()
}

function laborValue() {
  const input = document
    .querySelector(".single-table")
    .getElementsByTagName("input")[0]

  formatPrice(input)

  lineValues()
  totalValue()
  totalBudget()
}

// Orçamento
function totalBudget() {
  const inputTotal = document.getElementById("totalBudget")
  const inputs = document.querySelectorAll(".total-table")
  let total = 0

  inputs.forEach((e) => {
    if (e.value.includes(",")) {
      e.value = e.value.replace(",", "").replace(".", "")
    }
    total += Number(e.value)
  })
  inputTotal.value = total
  formatPrice(inputTotal)
}

// Iniciar
lineValues()
totalValue()
laborValue()
totalBudget()