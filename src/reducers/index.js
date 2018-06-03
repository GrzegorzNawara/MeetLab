import debug from '../include/debug'

const reducer = (state = [], action) => {
  switch (debug(action,'ACTION').type) {
    case 'SHOW_MENU':
      return {
        ...state,
        my_menu: state.menu
          .filter((item) => item.menu_type===state.menu_type)
          .reduce((menu,item) => {
            return (menu.indexOf(item.mtitle)===-1)?menu.concat(item.mtitle):menu;
          },[]),
        show_menu: 1
      }
    case 'CHOOSE_MENU':
      return {
        ...state,
        menu_choosen: action.menu.title
      }
    case 'RUN_CMD':
      return {
        ...state,
        show_menu: 0
      }
    case 'RESET_CHOICE':
      return {
        ...state,
        show_menu: 0,
        menu_choosen: ''
      }
    case 'ADD_WORKSHOP':
      return {
        ...state, workshops: [...state.workshops,
        {
          name: (action.name===undefined)?'HIDDEN WORKSHOP':action.name
      }]}
    default:
      return state
  }
}

export default reducer;
