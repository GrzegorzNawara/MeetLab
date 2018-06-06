import { connect } from 'react-redux'
import TitleNavBar from '../components/TitleNavBar'
import { showEdit } from '../actions'
//import debug from '../include/debug'

const mapStateToProps = (state,props) => ({
  edit_visible: 1,
  workshop_id: props.workshop_id,
  title: (props.workshop_id==='')?'':
    state.workshops.filter((workshop) => (workshop.workshop_id===props.workshop_id))[0].title
})

const mapDispatchToProps = {
  onEditClick: showEdit
}

const BrickNavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleNavBar)

export default BrickNavBar
