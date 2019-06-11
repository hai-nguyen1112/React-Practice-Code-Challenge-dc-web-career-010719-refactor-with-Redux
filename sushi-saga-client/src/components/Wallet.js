import React from 'react'
import {connect} from 'react-redux'
import {handleMoneyInput, handleMoneySubmit} from '../redux/actions'

const Wallet = ({inputMoney, onMoneyChange, wallet, onMoneySubmit}) => {
  return (
    <form id="wallet" onSubmit={e => onMoneySubmit(e, wallet, inputMoney)}>
      <input
        type="text"
        placeholder="Enter amount..."
        name="wallet"
        onChange={e => onMoneyChange(e.target.value)}
      />
      <button type="submit">Add Money</button>
    </form>
  )
}

const mapStateToProps = state => ({inputMoney: state.inputMoney, wallet: state.wallet})

const mapDispatchToProps = dispatch => {
  return {
    onMoneyChange: money => dispatch(handleMoneyInput(money)),
    onMoneySubmit: (e, wallet, money) => dispatch(handleMoneySubmit(e, wallet, money))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)
