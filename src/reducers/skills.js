const skills = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SKILL':
      return [
        ...state,
        {
          area: action.area,
          id: action.id,
          name: action.name,
          level0: action.level0,
          level1: action.level1,
          level2: action.level2
        }
      ]
    default:
      return state
  }
}

export default skills
