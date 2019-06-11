import React from 'react'
import {clickedSushi} from '../redux/actions'
import {connect} from 'react-redux'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => {props.onClickOfSushi(props.sushi, props.sushis, props.emptyPlates, props.wallet)}}>
        {
          props.sushi.eaten
          ?
          null
          :
          <img src={props.sushi.img_url} width="100%" alt={props.sushi.name}/>
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    sushis: state.sushis,
    emptyPlates: state.emptyPlates,
    wallet: state.wallet
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickOfSushi: (sushi, sushis, emptyPlates, wallet) => dispatch(clickedSushi(sushi, sushis, emptyPlates, wallet))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sushi)
