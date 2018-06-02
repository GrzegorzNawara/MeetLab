import { connect } from 'react-redux'
import List from '../components/List'
import { chooseSkill } from '../actions'
import debug from '../include/debug'

const mapStateToProps = (state) => ({
  visible: state.choice.show_list === 'SHOW_SKILL',
  items: state.skills_array
    .filter( (skill) => skill.area === state.choice.area )
    .map( (skill) => ({
      key: skill.id,
      title: skill.name,
      subtitle: debug([skill.area],
        'skill.area should be a string',
        typeof skill.area === 'string'
        ),
      skill: skill
    }))
})

const mapDispatchToProps = {
  onClick: chooseSkill
}

const SkillList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default SkillList
