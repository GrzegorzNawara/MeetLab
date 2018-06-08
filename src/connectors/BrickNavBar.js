import { connect } from 'react-redux'
import TitleNavBar from '../components/TitleNavBar'
import { showEdit } from '../actions'
//import debug from '../include/debug'

const mapStateToProps = (state,props) => ({
  edit_visible: 1,
  workshop_id: props.workshop_id,
  title: state.workshops.filter((workshop) => (workshop.workshop_id===props.workshop_id))[0].title,
  subtitle: state.workshops.filter((workshop) => (workshop.workshop_id===props.workshop_id))[0].subtitle,
  pin: state.workshops.filter((workshop) => (workshop.workshop_id===props.workshop_id))[0].pin,
  mgname: state.workshops.filter((workshop) => (workshop.workshop_id===props.workshop_id))[0].mgname
})

const mapDispatchToProps = {
  onEditClick: showEdit
}

const BrickNavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleNavBar)

export default BrickNavBar
