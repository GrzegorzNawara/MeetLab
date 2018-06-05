import { connect } from 'react-redux'
import TitleNavBar from '../components/TitleNavBar'
import { chooseBrick } from '../actions'
//import debug from '../include/debug'

const mapStateToProps = (state,props) => ({
  title: (props.workshop_id==='')?'':
    state.workshops.filter((workshop) => (workshop.workshop_id===props.workshop_id))[0].title
})

const mapDispatchToProps = {
  onClick: chooseBrick
}

const BrickNavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleNavBar)

export default BrickNavBar
