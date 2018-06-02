import { connect } from 'react-redux'
import Modal from '../components/Modal'
import { resetChoice } from '../actions'

const mapStateToProps = (state) => ({
  visible: state.choice.show_list !== 'SHOW_NONE',
  title: (state.choice.area !== '') ? state.choice.attendee.name + ' - ' + state.choice.area : state.choice.attendee.name
})

const mapDispatchToProps = {
  onCloseClick: resetChoice
}

const FeedbackModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)

export default FeedbackModal
