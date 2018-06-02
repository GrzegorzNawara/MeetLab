import { connect } from 'react-redux'
import List from '../components/List'
import { chooseAttendee } from '../actions'
import debug from '../include/debug'

const getFeedbackOnAttendee = (attendee_id, feedbacks_array) => (
  debug(feedbacks_array,
      'feedbacks_array should be an array',
      typeof feedbacks_array === 'object'
    )
    .filter( (feedback) => feedback.attendee_id === attendee_id )
    .reduce( (result, feedback) => {
      switch(feedback.level) {
        case 0:
        case '0': return [...result, feedback.skill_id+'?']
        case 1:
        case '1': return [...result, feedback.skill_id+'']
        case 2:
        case '2': return [...result, feedback.skill_id+'!']
        default: return [...result, feedback.skill_id+' #'+feedback.level]
      }
    }, [])
)

const mapStateToProps = (state) => ({
  visible: true,
  items: state.attendees_array.map( (attendee) => ({
      key: attendee.id,
      title: attendee.name,
      //subtitle: debug(getFeedbackOnAttendee(attendee.id, state.feedbacks_array),'TEST'),
      subtitle: getFeedbackOnAttendee(attendee.id, state.feedbacks_array),
      attendee: attendee
  }))
})

const mapDispatchToProps = {
  onClick: chooseAttendee
}

const AttendeeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default AttendeeList
