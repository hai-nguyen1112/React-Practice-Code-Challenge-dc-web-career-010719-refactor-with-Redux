const API = "http://localhost:3000/sushis"

function fetchSushisWithThunk() {
  return dispatch => {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      dispatch(fetchedSushisWithThunk(sushis))
    })
  }
}

function fetchedSushisWithThunk(sushis) {
  sushis.forEach(sushi => {
    sushi["eaten"] = false
  })
  return {
    type: "FETCHED_SUSHIS",
    payload: sushis
  }
}

function clickedMoreButton(sushis) {
  let newSushis = sushis.concat(sushis.splice(0, 4))
  return {
    type: "MORE_BUTTON_WAS_CLICKED",
    payload: newSushis
  }
}

function clickedSushi(clickedSushi, sushis, emptyPlates, wallet) {
  return dispatch => {
    if (clickedSushi["eaten"] === false && wallet >= clickedSushi.price) {
      dispatch(takeSushiOut(clickedSushi, sushis))
      dispatch(addEmptyPlate(emptyPlates, clickedSushi))
      dispatch(deductMoney(wallet, clickedSushi))
    } else {
      alert("You don't have enough money to eat more!")
    }
  }
}

function takeSushiOut(clickedSushi, sushis) {
  let newSushis = sushis.map(sushi => {
    if (sushi.id !== clickedSushi.id) {
      return sushi
    } else {
      sushi["eaten"] = true
      return sushi
    }
  })
  return {
    type: "SUSHI_WAS_CLICKED",
    payload: newSushis
  }
}

function addEmptyPlate(emptyPlates, clickedSushi) {
    let newEmptyPlates = [...emptyPlates]
    newEmptyPlates.push(clickedSushi)
    return {
      type: "EMPTY_PLATE_WAS_ADDED",
      payload: newEmptyPlates
    }
}

function deductMoney(wallet, clickedSushi) {
  return {
    type: "SUSHI_WAS_EATEN",
    payload: wallet - clickedSushi.price
  }
}

function handleMoneyInput(money) {
  return {
    type: "MONEY_WAS_ENTERED",
    payload: money
  }
}

function handleMoneySubmit(e, wallet, money) {
  e.preventDefault()
  document.querySelector("#wallet").reset()
  return {
    type: "MONEY_WAS_SUBMITTED",
    payload: wallet + parseInt(money, 10)
  }
}

export {fetchSushisWithThunk, clickedMoreButton, clickedSushi, handleMoneyInput, handleMoneySubmit}
