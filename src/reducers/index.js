import debug from '../include/debug'
import { v4 } from 'uuid'

const reducer = (state = [], action) => {
  switch (debug(action,'ACTION').type) {
    case 'SHOW_MENU':
      return {
        ...state,
        workshop_choosen: action.workshop_id,
        menu_type: action.menu_type,
        my_menu: state.menu
          .filter((item) => item.menu_type===action.menu_type)
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
          name: (action.name===undefined)?'My Hidden Workshop':action.name,
          workshop_id: (action.workshop_id===undefined)?v4():action.workshop_id,
          bricks: []
      }]}
    case 'ADD_TEST_BRICK':
      return {
        ...state,
        workshops: state.workshops.map((workshop) => (
          (workshop.workshop_id!==state.workshop_choosen)?workshop:{
            ...workshop,
            bricks:[...workshop.bricks, {id:v4(), name:'Test Brick'}]
      }))}
    default:
      return state
  }
}

export default reducer;
