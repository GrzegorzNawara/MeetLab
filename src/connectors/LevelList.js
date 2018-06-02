import { connect } from 'react-redux'
import List from '../components/List'
import { addFeedback } from '../actions'

const mapStateToProps = (state) => ({
  visible: state.choice.show_list === 'SHOW_LEVEL',
  items: [
    {
      key: 'level2',
      title: 'Warto stonować',
      subtitle: [state.choice.skill.name, state.choice.skill.level2],
      attendee_id: state.choice.attendee.id,
      skill_id: state.choice.skill.id,
      level: 2
    }, {
      key: 'level1',
      title: 'Ponadprzeciętnie',
      subtitle: [state.choice.skill.name, state.choice.skill.level1],
      attendee_id: state.choice.attendee.id,
      skill_id: state.choice.skill.id,
      level: 1
    }, {
      key: 'level0',
      title: 'Warto rozwinąć',
      subtitle: [state.choice.skill.name, state.choice.skill.level0],
      attendee_id: state.choice.attendee.id,
      skill_id: state.choice.skill.id,
      level: 0
    }
  ].filter( (item) => item.title !== undefined )
})

const mapDispatchToProps = {
  onClick: addFeedback
}

const LevelList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default LevelList
