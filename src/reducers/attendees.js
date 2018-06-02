const attendees = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ATTENDEE':
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ]
    default:
      return state
  }
}

export default attendees
