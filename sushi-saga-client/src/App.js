import React, { Component } from 'react'
import SushiContainer from './containers/SushiContainer'
import Table from './containers/Table'
import {fetchSushisWithThunk} from './redux/actions'
import {connect} from 'react-redux'
import Wallet from './components/Wallet'

class App extends Component {

  componentDidMount() {
    this.props.fetchSushis()
  }

  render() {
    return (
      <div className="app">
        <Wallet />
        <SushiContainer  />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sushis: state.sushis
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSushis: () => dispatch(fetchSushisWithThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
