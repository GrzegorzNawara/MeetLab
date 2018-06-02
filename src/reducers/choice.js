import debug from '../include/debug'

const choice = (state = {}, action) => {
  switch (action.type) {
    case 'CHOOSE_ATTENDEE':
      return (
        {
          attendee: action.attendee,
          area: state.area,
          skill: state.skill,
          level: -1,
          show_list: (
            debug( state.area,
            'area must not be undefined',
            state.area !== undefined) === ''
          ) ? 'SHOW_AREA' : 'SHOW_SKILL'
        })
    case 'CHOOSE_AREA':
      return (
        {
          attendee: state.attendee,
          area: action.area,
          skill: {},
          level: -1,
          show_list: 'SHOW_SKILL'
        })
      case 'CHOOSE_SKILL':
        return (
          {
            attendee: state.attendee,
            area: state.area,
            skill: action.skill,
            level: -1,
            show_list: 'SHOW_LEVEL'
          })
      case 'ADD_FEEDBACK':
        return (
          {
            attendee: state.attendee,
            area: state.area,
            skill: state.skill,
            level: action.level,
            show_list: 'SHOW_NONE'
          })
        case 'RESET_CHOICE':
          return (
            {
              attendee: {},
              area: '',
              skill: {},
              level: -1,
              show_list: 'SHOW_NONE'
            })
      default:
        return state
  }
}

export default choice
