const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WORKSHOP':
      return {
        ...state, workshops: [...state.workshops,
        {
          name: action.name
      }]}
    default:
      return state
  }
}

export default reducer;
