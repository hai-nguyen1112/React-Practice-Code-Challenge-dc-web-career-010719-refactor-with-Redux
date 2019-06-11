import React from 'react'
import {connect} from 'react-redux'
import {clickedMoreButton} from '../redux/actions'

const MoreButton = (props) => {
    return <button onClick={() => props.onClickOfMoreButton(props.sushis)}>
            More sushi!
          </button>
}

const mapStateToProps = state => {
  return {
    sushis: state.sushis
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickOfMoreButton: sushis => dispatch(clickedMoreButton(sushis))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoreButton)
