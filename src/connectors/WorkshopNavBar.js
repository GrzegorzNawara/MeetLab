import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import { chooseBrick } from '../actions'

const mapStateToProps = (state) => ({
  visible: 1
})

const mapDispatchToProps = {
  onClick: chooseBrick
}

const WorkshopNavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)

export default WorkshopNavBar
