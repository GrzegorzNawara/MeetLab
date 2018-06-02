const feedback = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FEEDBACK':
      return [
        ...state
          .filter( item => (
            item.skill_id !== action.skill_id
            || item.attendee_id !== action.attendee_id
          )),
        {
          attendee_id: action.attendee_id,
          skill_id: action.skill_id,
          level: action.level
        }]
    default:
      return state
  }
}

export default feedback
