import debug from '../include/debug'
import { v4 } from 'uuid'

const reducer = (state = [], action) => {
  switch (debug(action,'ACTION').type) {
    case 'SHOW_EDIT':
      return {
        ...state,
        workshop_choosen: action.workshop_id,
        menu_choosen: 'Change the Title',
        my_menu: [],
        show_menu: 1
      }
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
        menu_choosen: action.menu
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
    case 'SET_MY_ID_AND_NAME':
      return {
        ...state,
        my_id: action.my_id,
        my_name: action.my_name
      }
    case 'ADD_WORKSHOP':
      return {
        ...state, workshops: [...state.workshops,
        {
          title: (action.title===undefined)?'My Workshop':action.title,
          subtitle: (action.subtitle===undefined)?'Hidden':action.subtitle,
          workshop_id: (action.workshop_id===undefined)?v4():action.workshop_id,
          pin: ''+Math.floor(9899*Math.random()+1000),
          mgname: state.my_name,
          bricks: []
      }]}
    case 'CHANGE_WORKSHOP_TITLE':
      return {
        ...state,
        show_menu: 0,
        menu_choosen: '',
        workshops: state.workshops.map((workshop) => (
          (workshop.workshop_id!==action.workshop_id)?workshop:{
            ...workshop,
            title: action.title,
            subtitle: action.subtitle
      }))}
    case 'CMD_CLR':
      return {
        ...state,
        workshops: state.workshops.map((workshop) => (
          (workshop.workshop_id!==state.workshop_choosen)?workshop:{
            ...workshop,
            bricks:[]
      }))}
    case 'ADD_BRICK':
      return {
        ...state,
        workshops: state.workshops.map((workshop) => (
          (workshop.workshop_id!==state.workshop_choosen)?workshop:{
            ...workshop,
            bricks:[...workshop.bricks.filter((brick) => (brick.id!==action.params.brick.id.replace('RANDID',v4()))),
              { ...action.params.brick,
                id: action.params.brick.id.replace('RANDID',v4()),
                link: (action.params.brick.link===undefined)?'':action.params.brick.link.replace('GAMEID',v4()).replace('USERID',state.my_id),
              }]
      }))}
    default:
      return state
  }
}

export default reducer;
