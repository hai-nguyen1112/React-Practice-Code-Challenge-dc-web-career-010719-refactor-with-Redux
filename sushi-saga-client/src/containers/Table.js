import React, {Fragment} from 'react'
import {connect} from 'react-redux'

const Table = (props) => {
  let emptyPlateCards = props.emptyPlates.map((x, index) => <div key={index} className="empty-plate" style={{ top: -7 * index }}/>)
  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {emptyPlateCards}
        </div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => ({emptyPlates: state.emptyPlates, wallet: state.wallet})

export default connect(mapStateToProps)(Table)
