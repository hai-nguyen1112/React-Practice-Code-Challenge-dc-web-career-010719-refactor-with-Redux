import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import {connect} from 'react-redux'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis}) => {
  let sushiCards = sushis.slice(0, 4).map(sushi => <Sushi key={sushi.id} sushi={sushi}/>)
  return (
    <Fragment>
      <div className="belt">
        {sushiCards}
        <MoreButton />
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => {
  return {
    sushis: state.sushis
  }
}

export default connect(mapStateToProps)(SushiContainer)
